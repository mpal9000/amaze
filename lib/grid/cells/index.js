/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Cells;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _ramdaSrcPick = require('ramda/src/pick');

var _ramdaSrcPick2 = _interopRequireDefault(_ramdaSrcPick);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _cell = require('../../cell');

var _cell2 = _interopRequireDefault(_cell);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Cells() {
  return null;
}

/**
 * Render component.
 */

// TODO: Check if need a `key` prop
var cellProps = memoize(function (width, margin, checkReadyState, isStarted) {
  return { width: width, margin: margin, checkReadyState: checkReadyState, isStarted: isStarted };
});

Cells.render = function render(_ref) {
  var columns = _ref.columns;
  var _ref$margin = _ref.margin;
  var margin = _ref$margin === undefined ? 0 : _ref$margin;
  var cells = _ref.cells;
  var botsByIndex = _ref.botsByIndex;
  var checkReadyState = _ref.checkReadyState;
  var isStarted = _ref.isStarted;

  var cellWidth = 100 / columns - 2 * margin; // percent

  var renderCell = function renderCell(cell) {
    return _mercury2['default'].partial(_cell2['default'].render, cell, cellProps(cellWidth, margin, checkReadyState, isStarted), getBotIndicatorsOfCell(botsByIndex, cell.index));
  };
  var renderCells = (0, _ramdaSrcMap2['default'])(renderCell);

  return (0, _mercury.h)('.amaze-Grid-cells.u-cf', { style: { padding: margin / 2 + '%' } }, renderCells((0, _ramdaSrcValues2['default'])(cells)));
};

/**
 *
 */

var extractBotIdentity = (0, _ramdaSrcPick2['default'])(['id', 'color']);
var extractBotIndicators = memoize(function (botsOnCell) {
  return (0, _ramdaSrcMap2['default'])(extractBotIdentity, botsOnCell);
});
// We need the same array reference in case there are
// no bot indicators on a cell, in order to render only
// the "changed" cells via `hg.partial()`
var emptyBotIndicators = [];

function getBotIndicatorsOfCell(botsByIndex, index) {
  var botsOnCell = botsByIndex[index];
  return botsOnCell ? extractBotIndicators(botsOnCell) : emptyBotIndicators;
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map