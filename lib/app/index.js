/**
 * Module dependencies
 */

'use strict';

var _taggedTemplateLiteral = require('babel-runtime/helpers/tagged-template-literal')['default'];

var _Number$parseInt = require('babel-runtime/core-js/number/parse-int')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Number$isInteger = require('babel-runtime/core-js/number/is-integer')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = App;

var _templateObject = _taggedTemplateLiteral(['\n        Main loop panicked, probably because the browser tab\n        was put in the background. Discarding ', 'ms\n      '], ['\n        Main loop panicked, probably because the browser tab\n        was put in the background. Discarding ', 'ms\n      ']);

var _timers = require('timers');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _ramdaSrcKeys = require('ramda/src/keys');

var _ramdaSrcKeys2 = _interopRequireDefault(_ramdaSrcKeys);

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _ramdaSrcForEach = require('ramda/src/forEach');

var _ramdaSrcForEach2 = _interopRequireDefault(_ramdaSrcForEach);

var _ramdaSrcFind = require('ramda/src/find');

var _ramdaSrcFind2 = _interopRequireDefault(_ramdaSrcFind);

var _ramdaSrcFilter = require('ramda/src/filter');

var _ramdaSrcFilter2 = _interopRequireDefault(_ramdaSrcFilter);

var _ramdaSrcTimes = require('ramda/src/times');

var _ramdaSrcTimes2 = _interopRequireDefault(_ramdaSrcTimes);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcDefaultTo = require('ramda/src/defaultTo');

var _ramdaSrcDefaultTo2 = _interopRequireDefault(_ramdaSrcDefaultTo);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _mainloopJs = require('mainloop.js');

var _mainloopJs2 = _interopRequireDefault(_mainloopJs);

var _util = require('../util');

var _dragEventsSetup2 = require('../drag-events/setup');

var _dragEventsSetup3 = _interopRequireDefault(_dragEventsSetup2);

var _bot = require('../bot');

var _bot2 = _interopRequireDefault(_bot);

var _board = require('../board');

var _board2 = _interopRequireDefault(_board);

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 *
 */

var defaultDimension = (0, _ramdaSrcDefaultTo2['default'])(20);
var defaultMargin = (0, _ramdaSrcDefaultTo2['default'])(0.5);

/**
 * Component
 */

function App(opts) {
  var undo = opts.undo;
  var redo = opts.redo;

  var rows = defaultDimension(opts.rows);
  var columns = defaultDimension(opts.columns);
  var margin = defaultMargin(opts.margin);
  var maxWinners = opts.maxWinners || 3;
  var winners = [];
  var _hasFinished = false;
  var startTime = null;
  var pauseTime = null;

  assertRows(rows);
  assertColumns(columns);

  var cells = createCells();

  var _dragEventsSetup = (0, _dragEventsSetup3['default'])();

  var listenTo = _dragEventsSetup.listenTo;
  var unlistenTo = _dragEventsSetup.unlistenTo;

  var botIdentity = _bot2['default'].createIdentity();

  _mainloopJs2['default']
  // Values below `1000 / 144` are discouraged and
  // below `1000 / 240` are strongly discouraged
  .setSimulationTimestep(500).setUpdate(update).setDraw(draw).setEnd(end);

  var state = _mercury2['default'].state({
    rows: _mercury2['default'].value(rows),
    columns: _mercury2['default'].value(columns),
    margin: _mercury2['default'].value(margin), // percent
    cells: _mercury2['default'].varhash(cells),
    bots: _mercury2['default'].varhash({}),
    botIdentity: _mercury2['default'].value(botIdentity),
    fps: _mercury2['default'].value(0), // Used only in development
    isReady: _mercury2['default'].value(false),
    isStarted: _mercury2['default'].value(false),
    isRunning: _mercury2['default'].value(false),
    isCellEnabled: _mercury2['default'].value(isCellEnabled),
    isDraggingEnabled: _mercury2['default'].value(false),
    start: _mercury2['default'].value(start),
    pause: _mercury2['default'].value(pause),
    reset: _mercury2['default'].value(reset),
    getWinners: _mercury2['default'].value(getWinners),
    enableDragEvents: _mercury2['default'].value(enableDragEvents),
    disableDragEvents: _mercury2['default'].value(disableDragEvents),
    board: (0, _board2['default'])({ undo: undo, redo: redo }),
    channels: {
      onStart: onStart, onPause: onPause, onReset: onReset,
      addBotRandomly: addBotRandomly,
      checkReadyState: checkReadyState
    }
  });

  function createCells() {
    // TODO: Check if can pass `onAddBot()` via `props` on `render()`
    var cell = (0, _ramdaSrcPartialRight2['default'])((0, _ramdaSrcPartial2['default'])(_cell2['default'], columns), onAddBot);
    var cells = (0, _ramdaSrcTimes2['default'])(cell, rows * columns);
    return cells;
  }

  function start(cb) {
    (0, _timers.setImmediate)(function () {
      var disableDragEvents = state.disableDragEvents();
      disableDragEvents();

      _mainloopJs2['default'].start();

      (0, _timers.setImmediate)(function () {
        (0, _raf2['default'])(function () {
          // The loop should have started by now
          if (startTime === null) {
            startTime = new Date().getTime();
          } else if (pauseTime !== null) {
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
    (0, _timers.setImmediate)(function () {
      (0, _raf2['default'])(function () {
        _mainloopJs2['default'].stop();

        pauseTime = new Date().getTime();

        // state.isRunning.set(MainLoop.isRunning());
        state.isRunning.set(false);
        state.fps.set(0);

        if (cb) cb();
      });
    });
  }

  function reset(cb) {
    pause(function () {
      winners = [];
      _hasFinished = false;
      startTime = null;
      pauseTime = null;

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      (0, _ramdaSrcForEach2['default'])(state.bots['delete'], (0, _ramdaSrcKeys2['default'])(state.bots));

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      var nextCells = createCells();

      (0, _ramdaSrcForEach2['default'])(function (idx) {
        return state.cells.put(idx, nextCells[idx], state.cells);
      }, (0, _ramdaSrcKeys2['default'])(state.cells));

      state.isReady.set(false);
      state.isStarted.set(false);

      var enableDragEvents = state.enableDragEvents();
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
    return !!(0, _ramdaSrcFind2['default'])(function (_ref) {
      var id = _ref.id;
      return bot.id() === id;
    }, winners);
  }

  function getWinners() {
    return winners.length ? winners : null;
  }

  function hasGameFinished() {
    if (_hasFinished) return true;

    var totalBots = (0, _ramdaSrcKeys2['default'])(state.bots).length;
    var totalWinners = winners.length;

    var hasFinished = totalWinners > 0 && (totalWinners === totalBots || totalWinners === maxWinners || totalWinners === totalBots - 1);

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

    var currTime = new Date().getTime();

    (0, _ramdaSrcForEach2['default'])(function (bot) {
      // Bot is a winner, do nothing
      if (isWinner(bot)) return;

      var prevIndex = bot.prevIndex;
      var index = bot.index();
      var move = bot.move();
      var nextIndex = move(prevIndex, index);

      if (nextIndex !== index) {
        if (prevIndex !== index) {
          bot.prevIndex = index;
        }

        bot.nextIndex = nextIndex;

        // Bot won
        if (state.cells.get(nextIndex).isExit() && !hasGameFinished()) {
          winners.push({
            id: bot.id(),
            time: currTime - startTime
          });
        }
      }
    }, (0, _ramdaSrcValues2['default'])(state.bots));
  }

  function draw() {
    (0, _ramdaSrcForEach2['default'])(function (bot) {
      if (bot.nextIndex !== bot.index()) {
        // TODO: If we leave `row` and `col` properties inside
        // `Bot()` instances, we need to update them too here
        bot.index.set(bot.nextIndex);
      }
    }, (0, _ramdaSrcValues2['default'])(state.bots));
  }

  // TODO: Do that only in development (use "envify" for "browserify")
  function end(fps, panic) {
    if (hasGameFinished()) {
      pause();
      return;
    }

    state.fps.set(_Number$parseInt(fps));

    if (panic) {
      // This pattern introduces non-deterministic behaviour,
      // but in this case it's better than the alternative (the application
      // would look like it was running very quickly until the simulation
      // caught up to real time). See the documentation for
      // `MainLoop.setEnd()` for additional explanation.
      var discardedTime = Math.round(_mainloopJs2['default'].resetFrameDelta());
      /*eslint-disable no-console*/
      console.warn((0, _util.ln)(_templateObject, discardedTime));
      /*eslint-enable no-console*/
    }
  }

  return state;
}

/**
 * Render component.
 */

var boardProps = memoize(function (columns, margin, cells, bots, botIdentity, isReady, isRunning, winners, onStart, onPause, onReset, addBotRandomly, checkReadyState, isStarted) {
  return {
    columns: columns, margin: margin, cells: cells,
    bots: bots, botIdentity: botIdentity,
    isReady: isReady, isRunning: isRunning, winners: winners,
    onStart: onStart, onPause: onPause, onReset: onReset,
    addBotRandomly: addBotRandomly,
    checkReadyState: checkReadyState, isStarted: isStarted
  };
});

App.render = function render(state) {
  var isRunning = state.isRunning;
  var isDraggingEnabled = state.isDraggingEnabled;
  var enableDragEvents = state.enableDragEvents;
  var channels = state.channels;

  var winners = isRunning ? null : state.getWinners();

  return (0, _mercury.h)('section.amaze-App', {
    'ev-hook': new Hook({
      isRunning: isRunning,
      isDraggingEnabled: isDraggingEnabled,
      enableDragEvents: enableDragEvents
    })
  }, [_mercury2['default'].partial(_board2['default'].render, state.board, boardProps(state.columns, state.margin, state.cells, state.bots, state.botIdentity, state.isReady, isRunning, winners, channels.onStart, channels.onPause, channels.onReset, channels.addBotRandomly, channels.checkReadyState, state.isStarted))]);
};

/**
 *
 */

// TODO: Do that only in development (use "envify" for "browserify")
// hg.partial(renderFps, state.fps), //DEV-ONLY/
function Hook(opts) {
  _Object$assign(this, opts);
}

Hook.prototype.hook = function hook() {
  var _this = this;

  if (this.isDraggingEnabled || this.isRunning) return;

  (0, _timers.setImmediate)(function () {
    // DOM element will be in the real DOM by now
    _this.enableDragEvents();
  });
};

/**
 *
 */

function addBotRandomly(state, _spec) {
  var isEntryCell = function isEntryCell(cell) {
    return cell.isEntry();
  };
  var filterEntryCells = (0, _ramdaSrcFilter2['default'])(isEntryCell);
  var entryCells = filterEntryCells((0, _ramdaSrcValues2['default'])(state.cells));

  if (!entryCells.length) return;

  var randIndex = (0, _util.randomIntFromRange)(0, entryCells.length - 1);
  var index = entryCells[randIndex].index();

  // TODO: Check if it's better to not store `row` and `col`,
  // inside `Bot` instance
  var spec = _Object$assign({}, _spec, { index: index });

  registerBot(state, spec);
}

/**
 *
 */

function registerBot(state, spec) {
  state.bots.put(spec.id, (0, _bot2['default'])(state.rows(), state.columns(), state.isCellEnabled(), spec));

  state.botIdentity.set(_bot2['default'].createIdentity());

  checkReadyState(state);
}

/**
 *
 */

function checkReadyState(state) {
  if ((0, _ramdaSrcKeys2['default'])(state.bots).length && exitCellsExist(state)
  /*&& !state.isReady()*/) {
      state.isReady.set(true);
    } else {
    state.isReady.set(false);
  }
}

/**
 *
 */

function exitCellsExist(state) {
  return !!(0, _ramdaSrcFind2['default'])(function (cell) {
    return cell.isExit();
  }, (0, _ramdaSrcValues2['default'])(state.cells));
}

/**
 *
 */

function onStart(state) {
  var start = state.start();
  start();
}

/**
 *
 */

function onPause(state) {
  var pause = state.pause();
  pause();
}

/**
 *
 */

function onReset(state) {
  var reset = state.reset();
  reset();
}

/**
 * Used only in development.
 */

function renderFps(fps) {
  return (0, _mercury.h)('section.amaze-App-fpsMeter', fps + ' FPS');
}

/**
 *
 */

function assertRows(rows) {
  if (rows != null && (!_Number$isInteger(rows) || rows < 1)) {
    throw new TypeError((0, _util.ln)('Invalid "rows" option,\n      expected positive integer\n      (got ' + rows + ' :: ' + typeof rows + ')'));
  }

  return true;
}

/**
 *
 */

function assertColumns(columns) {
  if (columns != null && (!_Number$isInteger(columns) || columns < 1)) {
    throw new TypeError((0, _util.ln)('Invalid "columns" option,\n      expected positive integer\n      (got ' + columns + ' :: ' + typeof columns + '))'));
  }

  return true;
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map