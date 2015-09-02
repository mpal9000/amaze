/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Board;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _grid = require('../grid');

var _grid2 = _interopRequireDefault(_grid);

var _controls = require('../controls');

var _controls2 = _interopRequireDefault(_controls);

var _results = require('../results');

var _results2 = _interopRequireDefault(_results);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Board(opts) {
  var undo = opts.undo;
  var redo = opts.redo;

  return _mercury2['default'].state({
    controls: (0, _controls2['default'])({ undo: undo, redo: redo })
  });
}

/**
 * Render component.
 */

var gridProps = memoize(function (columns, margin, cells, bots, checkReadyState, isStarted) {
  return { columns: columns, margin: margin, cells: cells, bots: bots, checkReadyState: checkReadyState, isStarted: isStarted };
});

var controlsProps = memoize(function (botIdentity, isReady, isRunning, onStart, onPause, onReset, addBotRandomly, isStarted, winners) {
  return {
    botIdentity: botIdentity, isReady: isReady, isRunning: isRunning, onStart: onStart, onPause: onPause, onReset: onReset,
    addBotRandomly: addBotRandomly, isStarted: isStarted, winners: winners
  };
});

var resultsProps = memoize(function (bots, winners) {
  return { bots: bots, winners: winners };
});

Board.render = function render(state, props) {
  var controls = state.controls;

  return (0, _mercury.h)('section.amaze-Board', [_mercury2['default'].partial(renderContent, props), _mercury2['default'].partial(_controls2['default'].render, controls, controlsProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['botIdentity', 'isReady', 'isRunning', 'onStart', 'onPause', 'onReset', 'addBotRandomly', 'isStarted', 'winners'], props))))]);
};

/**
 *
 */

function renderContent(props) {
  return (0, _mercury.h)('.amaze-Board-content', [_mercury2['default'].partial(_grid2['default'].render, gridProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted'], props)))), props.winners && _mercury2['default'].partial(_results2['default'].render, resultsProps(props.bots, props.winners))]);
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map