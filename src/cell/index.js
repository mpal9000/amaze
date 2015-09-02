/**
 * Module dependencies
 */

import hg, { h } from 'mercury';
import _memoize from 'memoizee';
import partialRight from 'ramda/src/partialRight';
import _props from 'ramda/src/props';

import { sendTap } from '../gestures';
import dragTargetEvents from '../drag-events/target';
import Tile from '../tile';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Cell(columns, index, onAddBot) {
  const row = Math.floor(index / columns);
  const col = index - row * columns;

  const state = hg.state({
    columns: hg.value(columns),
    index: hg.value(index),
    row: hg.value(row),
    col: hg.value(col),
    isActive: hg.value(false),
    isEntry: hg.value(false),
    isExit: hg.value(false),
    isEnabled: hg.value(isEnabled),
    isDragHovered: hg.value(false),
    onDrop: hg.value(onDrop),
    addBot: hg.value(addBot),
    channels: { onTap, onDrag },
  });

  function isEnabled() {
    return state.isActive()
      || state.isEntry()
      || state.isExit();
  }

  function addBot(botIdentity) {
    // TODO: Check if it's better to not store `row` and `col`,
    // inside `Bot` instance
    onAddBot(Object.assign({}, botIdentity, { index, row, col }));
  }

  return state;
}

/**
 * Render component.
 */

const cellStyle = memoize((columns, col, width, margin = 0) => {
  return  {
    width: `${width}%`,
    'padding-bottom': `${width}%`,
    margin: `${margin}%`,
    clear: col == 0
      ? 'left'
      : col == columns - 1
         ? 'right'
         : 'none', // TODO: Consider to not assign `clear: 'none'`
  };
});

const tileProps = memoize((isActive, isEntry, isExit, isDragHovered, botIndicators) => {
  return { isActive, isEntry, isExit, isDragHovered, botIndicators };
});

Cell.render = function render(state, props, botIndicators) {
  const { isEntry, channels } = state;

  const surfaceProps = props.isStarted ? {} : !isEntry
    ? {
      'ev-event': [
        sendTap(channels.onTap, { botIndicators }),
        sendTap(props.checkReadyState),
      ],
    }
    : {
      'ev-event': [
        sendTap(channels.onTap, { botIndicators }),
        dragTargetEvents(channels.onDrag),
        sendTap(props.checkReadyState),
      ],
    };

  return h(
    '.amaze-Cell',
    {
      style: cellStyle(
        ..._props(['columns', 'col'], state),
        ..._props(['width', 'margin'], props)
      ),
    },
    [
      hg.partial(Tile.render, tileProps(..._props([
        'isActive', 'isEntry', 'isExit', 'isDragHovered',
      ], state), botIndicators)),

      h('.amaze-Cell-surface', surfaceProps),
    ]
  );
}

/**
 *
 */

function onTap(state, { botIndicators }) {
  // TODO: Consider to rename `snapshot`
  const snapshot = state();

  if (botIndicators.length) return;

  if (!snapshot.isActive) {
    state.isActive.set(true);
  }

  else if (snapshot.isExit) {
    state.set(Object.assign({}, snapshot, { isExit: false, isActive: false }));
  }

  else if (snapshot.isEntry) {
    state.set(Object.assign({}, snapshot, { isEntry: false, isExit: true }));
  }

  else {
    state.isEntry.set(true);
  }
}

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragenter': return onDragenter(state, data);
    // case 'dragover': return onDragover(state, data);
    case 'dragleave': return onDragleave(state, data);
    case 'drop': return onDrop(state, data);
    // no default
  }
}

/**
 *
 */

function onDragenter(state) {
  state.isDragHovered.set(true);
}

/**
 *
 */

function onDragleave(state) {
  state.isDragHovered.set(false);
}

/**
 *
 */

function onDrop(state, data) {
  state.isDragHovered.set(false);

  const botIdentity = JSON.parse(data.dataTransfer.getData('text/plain'));
  const addBot = state.addBot();

  addBot(botIdentity);
}
