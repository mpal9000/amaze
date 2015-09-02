/**
 * Module dependencies
 */

import { setImmediate } from 'timers';
import raf from 'raf';
import keys from 'ramda/src/keys';
import values from 'ramda/src/values';
import forEach from 'ramda/src/forEach';
import find from 'ramda/src/find';
import filter from 'ramda/src/filter';
import times from 'ramda/src/times';
import partial from 'ramda/src/partial';
import partialRight from 'ramda/src/partialRight';
import _memoize from 'memoizee';
import defaultTo from 'ramda/src/defaultTo';
import hg, { h } from 'mercury';
import MainLoop from 'mainloop.js';

import { randomIntFromRange, ln } from '../util';
import dragEventsSetup from '../drag-events/setup';
import Bot from '../bot';
import Board from '../board';
import Cell from '../cell';

const memoize = partialRight(_memoize, { max: 1 });

/**
 *
 */

const defaultDimension = defaultTo(20);
const defaultMargin = defaultTo(0.5);

/**
 * Component
 */

export default function App(opts) {
  const { undo, redo } = opts;
  const rows = defaultDimension(opts.rows);
  const columns = defaultDimension(opts.columns);
  const margin = defaultMargin(opts.margin);
  const maxWinners = opts.maxWinners || 3;
  let winners = [];
  let _hasFinished = false;
  let startTime = null;
  let pauseTime = null;

  assertRows(rows);
  assertColumns(columns);

  const cells = createCells();

  const { listenTo, unlistenTo } = dragEventsSetup();

  const botIdentity = Bot.createIdentity();

  MainLoop
  // Values below `1000 / 144` are discouraged and
  // below `1000 / 240` are strongly discouraged
  .setSimulationTimestep(500)
  .setUpdate(update)
  .setDraw(draw)
  .setEnd(end);

  const state = hg.state({
    rows: hg.value(rows),
    columns: hg.value(columns),
    margin: hg.value(margin), // percent
    cells: hg.varhash(cells),
    bots: hg.varhash({}),
    botIdentity: hg.value(botIdentity),
    fps: hg.value(0), // Used only in development
    isReady: hg.value(false),
    isStarted: hg.value(false),
    isRunning: hg.value(false),
    isCellEnabled: hg.value(isCellEnabled),
    isDraggingEnabled: hg.value(false),
    start: hg.value(start),
    pause: hg.value(pause),
    reset: hg.value(reset),
    getWinners: hg.value(getWinners),
    enableDragEvents: hg.value(enableDragEvents),
    disableDragEvents: hg.value(disableDragEvents),
    board: Board({ undo, redo }),
    channels: {
      onStart, onPause, onReset,
      addBotRandomly,
      checkReadyState,
    },
  });

  function createCells() {
    // TODO: Check if can pass `onAddBot()` via `props` on `render()`
    const cell = partialRight(partial(Cell, columns), onAddBot);
    const cells = times(cell, rows * columns);
    return cells;
  }

  function start(cb) {
    console.log('start()');
    setImmediate(() => {
      const disableDragEvents = state.disableDragEvents();
      disableDragEvents();

      MainLoop.start();

      setImmediate(() => {
        raf(() => {
          // The loop should have started by now
          if (startTime === null) {
            startTime = new Date().getTime();
          }

          else if (pauseTime !== null) {
            startTime += new Date().getTime() - pauseTime;
            pauseTime = null;
          }

          // state.isRunning.set(MainLoop.isRunning());
          state.isRunning.set(true);
          state.isStarted.set(true);

          if (cb) cb();
        });
      });
    });
  }

  function pause(cb) {
    setImmediate(() => {
      raf(() => {
        MainLoop.stop();

        pauseTime = new Date().getTime();

        // state.isRunning.set(MainLoop.isRunning());
        state.isRunning.set(false);
        state.fps.set(0);

        if (cb) cb();
      });
    });
  }

  function reset(cb) {
    pause(() => {
      winners = [];
      _hasFinished = false;
      startTime = null;
      pauseTime = null;

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      forEach(state.bots.delete, keys(state.bots));

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      const nextCells = createCells();

      forEach(
        idx => state.cells.put(idx, nextCells[idx], state.cells),
        keys(state.cells)
      );

      state.isReady.set(false);
      state.isStarted.set(false);

      const enableDragEvents = state.enableDragEvents();
      enableDragEvents();

      if (cb) cb();
    });
  }

  function isCellEnabled(index) {
    return state.cells.get(index).isEnabled()();
  }

  function onAddBot(spec) {
    registerBot(state, spec);
  }

  // TODO: Consider to `memoize()` this function,
  // but we need to cleen the cache after the game has finished,
  // ie. inside `reset()`
  function isWinner(bot) {
    return !!find(({ id }) => bot.id() === id, winners);
  }

  function getWinners() {
    return winners.length ? winners : null;
  }

  function hasGameFinished() {
    if (_hasFinished) return true;

    const totalBots = keys(state.bots).length;
    const totalWinners = winners.length;

    const hasFinished = totalWinners > 0
      && (totalWinners === totalBots
          || totalWinners === maxWinners
          || totalWinners === totalBots - 1);

    if (hasFinished) _hasFinished = true;

    return hasFinished;
  }

  function enableDragEvents() {
    if (state.isDraggingEnabled()) return;
    listenTo();
    state.isDraggingEnabled.set(true);
  }

  function disableDragEvents() {
    if (!state.isDraggingEnabled()) return;
    unlistenTo();
    state.isDraggingEnabled.set(false);
  }

  function update() {
    // Game has finished, do nothing
    if (hasGameFinished()) return;

    const currTime = new Date().getTime();

    forEach(bot => {
      // Bot is a winner, do nothing
      if (isWinner(bot)) return;

      const prevIndex = bot.prevIndex;
      const index = bot.index();
      const move = bot.move();
      const nextIndex = move(prevIndex, index);

      if (nextIndex !== index) {
        if (prevIndex !== index) {
          bot.prevIndex = index;
        }

        bot.nextIndex = nextIndex;

        // Bot won
        if (state.cells.get(nextIndex).isExit()
            && !hasGameFinished()) {
          winners.push({
            id: bot.id(),
            time: currTime - startTime,
          });
        }
      }
    }, values(state.bots));
  }

  function draw() {
    forEach(bot => {
      if (bot.nextIndex !== bot.index()) {
        // TODO: If we leave `row` and `col` properties inside
        // `Bot()` instances, we need to update them too here
        bot.index.set(bot.nextIndex);
      }
    }, values(state.bots));
  }

  // TODO: Do that only in development (use "envify" for "browserify")
  function end(fps, panic) {
    if (hasGameFinished()) {
      pause();
      return;
    }

    state.fps.set(Number.parseInt(fps));

    if (panic) {
      // This pattern introduces non-deterministic behaviour,
      // but in this case it's better than the alternative (the application
      // would look like it was running very quickly until the simulation
      // caught up to real time). See the documentation for
      // `MainLoop.setEnd()` for additional explanation.
      const discardedTime = Math.round(MainLoop.resetFrameDelta());
      /*eslint-disable no-console*/
      console.warn(ln`
        Main loop panicked, probably because the browser tab
        was put in the background. Discarding ${discardedTime}ms
      `);
      /*eslint-enable no-console*/
    }
  }

  return state;
}

/**
 * Render component.
 */

const boardProps = memoize((columns, margin, cells, bots, botIdentity, isReady, isRunning, winners, onStart, onPause, onReset, addBotRandomly, checkReadyState, isStarted) => {
  return {
    columns, margin, cells,
    bots, botIdentity,
    isReady, isRunning, winners,
    onStart, onPause, onReset,
    addBotRandomly,
    checkReadyState, isStarted,
  };
});

App.render = function render(state) {
  const { isRunning, isDraggingEnabled, enableDragEvents, channels } = state;
  const winners = isRunning ? null : state.getWinners();

  return h(
    'section.amaze-App',
    {
      'ev-hook': new Hook({
        isRunning,
        isDraggingEnabled,
        enableDragEvents,
      }),
    },
    [
      hg.partial(Board.render, state.board, boardProps(
        state.columns, state.margin, state.cells,
        state.bots, state.botIdentity,
        state.isReady, isRunning, winners,
        channels.onStart, channels.onPause, channels.onReset,
        channels.addBotRandomly,
        channels.checkReadyState, state.isStarted
      )),

      // TODO: Do that only in development (use "envify" for "browserify")
      // hg.partial(renderFps, state.fps), //DEV-ONLY/
    ]
  );
}

/**
 *
 */

function Hook(opts) {
  Object.assign(this, opts);
}

Hook.prototype.hook = function hook() {
  if (this.isDraggingEnabled || this.isRunning) return;

  setImmediate(() => {
    // DOM element will be in the real DOM by now
    this.enableDragEvents();
  });
};

/**
 *
 */

function addBotRandomly(state, _spec) {
  const isEntryCell = cell => cell.isEntry();
  const filterEntryCells = filter(isEntryCell)
  const entryCells = filterEntryCells(values(state.cells))

  if (!entryCells.length) return;

  const randIndex = randomIntFromRange(0, entryCells.length - 1);
  const index = entryCells[randIndex].index();

  // TODO: Check if it's better to not store `row` and `col`,
  // inside `Bot` instance
  const spec = Object.assign({}, _spec, { index });

  registerBot(state, spec);
}

/**
 *
 */

function registerBot(state, spec) {
  state.bots.put(spec.id, Bot(
    state.rows(),
    state.columns(),
    state.isCellEnabled(),
    spec
  ));

  state.botIdentity.set(Bot.createIdentity());

  checkReadyState(state);
}

/**
 *
 */

function checkReadyState(state) {
  if (keys(state.bots).length
      && exitCellsExist(state)
      /*&& !state.isReady()*/) {
    state.isReady.set(true);
  }

  else {
    state.isReady.set(false);
  }
}

/**
 *
 */

function exitCellsExist(state) {
  return !!find(cell => cell.isExit(), values(state.cells))
}

/**
 *
 */

function onStart(state) {
  const start = state.start();
  start();
}

/**
 *
 */

function onPause(state) {
  const pause = state.pause();
  pause();
}

/**
 *
 */

function onReset(state) {
  const reset = state.reset();
  reset();
}

/**
 * Used only in development.
 */

function renderFps(fps) {
  return h('section.amaze-App-fpsMeter', `${fps} FPS`);
}

/**
 *
 */

function assertRows(rows) {
  if (rows != null && (!Number.isInteger(rows) || rows < 1)) {
    throw new TypeError(ln(
      `Invalid "rows" option,
      expected positive integer
      (got ${rows} :: ${typeof rows})`
    ));
  }

  return true;
}

/**
 *
 */

function assertColumns(columns) {
  if (columns != null && (!Number.isInteger(columns) || columns < 1)) {
    throw new TypeError(ln(
      `Invalid "columns" option,
      expected positive integer
      (got ${columns} :: ${typeof columns}))`
    ));
  }

  return true;
}
