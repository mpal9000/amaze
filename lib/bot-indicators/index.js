/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BotIndicators;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcAddIndex = require('ramda/src/addIndex');

var _ramdaSrcAddIndex2 = _interopRequireDefault(_ramdaSrcAddIndex);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _indicator = require('./indicator');

var _indicator2 = _interopRequireDefault(_indicator);

var mapIndexed = (0, _ramdaSrcAddIndex2['default'])(_ramdaSrcMap2['default']);

/**
 * Component
 */

function BotIndicators() {
  return null;
}

/**
 * Render component.
 */

BotIndicators.render = function render(columns, botIndicators) {
  var margin = 0; // percent
  var cellWidth = 100 / columns - 2 * margin; // percent

  var renderCell = (0, _ramdaSrcPartial2['default'])(_mercury2['default'].partial, _indicator2['default'].render, columns, cellWidth, margin);
  var renderCells = mapIndexed(renderCell);

  return (0, _mercury.h)('.amaze-BotIndicators.u-cf',
  // { style: { padding: `${margin / 2}%` } }, //REF//
  renderCells(botIndicators));
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map