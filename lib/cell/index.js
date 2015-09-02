/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Cell;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _gestures = require('../gestures');

var _dragEventsTarget = require('../drag-events/target');

var _dragEventsTarget2 = _interopRequireDefault(_dragEventsTarget);

var _tile = require('../tile');

var _tile2 = _interopRequireDefault(_tile);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Cell(columns, index, onAddBot) {
  var row = Math.floor(index / columns);
  var col = index - row * columns;

  var state = _mercury2['default'].state({
    columns: _mercury2['default'].value(columns),
    index: _mercury2['default'].value(index),
    row: _mercury2['default'].value(row),
    col: _mercury2['default'].value(col),
    isActive: _mercury2['default'].value(false),
    isEntry: _mercury2['default'].value(false),
    isExit: _mercury2['default'].value(false),
    isEnabled: _mercury2['default'].value(isEnabled),
    isDragHovered: _mercury2['default'].value(false),
    onDrop: _mercury2['default'].value(onDrop),
    addBot: _mercury2['default'].value(addBot),
    channels: { onTap: onTap, onDrag: onDrag }
  });

  function isEnabled() {
    return state.isActive() || state.isEntry() || state.isExit();
  }

  function addBot(botIdentity) {
    // TODO: Check if it's better to not store `row` and `col`,
    // inside `Bot` instance
    onAddBot(_Object$assign({}, botIdentity, { index: index, row: row, col: col }));
  }

  return state;
}

/**
 * Render component.
 */

var cellStyle = memoize(function (columns, col, width) {
  var margin = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  return {
    width: width + '%',
    'padding-bottom': width + '%',
    margin: margin + '%',
    clear: col == 0 ? 'left' : col == columns - 1 ? 'right' : 'none' };
});

// TODO: Consider to not assign `clear: 'none'`
var tileProps = memoize(function (isActive, isEntry, isExit, isDragHovered, botIndicators) {
  return { isActive: isActive, isEntry: isEntry, isExit: isExit, isDragHovered: isDragHovered, botIndicators: botIndicators };
});

Cell.render = function render(state, props, botIndicators) {
  var isEntry = state.isEntry;
  var channels = state.channels;

  var surfaceProps = props.isStarted ? {} : !isEntry ? {
    'ev-event': [(0, _gestures.sendTap)(channels.onTap, { botIndicators: botIndicators }), (0, _gestures.sendTap)(props.checkReadyState)]
  } : {
    'ev-event': [(0, _gestures.sendTap)(channels.onTap, { botIndicators: botIndicators }), (0, _dragEventsTarget2['default'])(channels.onDrag), (0, _gestures.sendTap)(props.checkReadyState)]
  };

  return (0, _mercury.h)('.amaze-Cell', {
    style: cellStyle.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'col'], state)).concat(_toConsumableArray((0, _ramdaSrcProps2['default'])(['width', 'margin'], props))))
  }, [_mercury2['default'].partial(_tile2['default'].render, tileProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['isActive', 'isEntry', 'isExit', 'isDragHovered'], state)).concat([botIndicators]))), (0, _mercury.h)('.amaze-Cell-surface', surfaceProps)]);
};

/**
 *
 */

function onTap(state, _ref) {
  var botIndicators = _ref.botIndicators;

  // TODO: Consider to rename `snapshot`
  var snapshot = state();

  if (botIndicators.length) return;

  if (!snapshot.isActive) {
    state.isActive.set(true);
  } else if (snapshot.isExit) {
    state.set(_Object$assign({}, snapshot, { isExit: false, isActive: false }));
  } else if (snapshot.isEntry) {
    state.set(_Object$assign({}, snapshot, { isEntry: false, isExit: true }));
  } else {
    state.isEntry.set(true);
  }
}

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragenter':
      return onDragenter(state, data);
    // case 'dragover': return onDragover(state, data);
    case 'dragleave':
      return onDragleave(state, data);
    case 'drop':
      return onDrop(state, data);
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

  var botIdentity = JSON.parse(data.dataTransfer.getData('text/plain'));
  var addBot = state.addBot();

  addBot(botIdentity);
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map