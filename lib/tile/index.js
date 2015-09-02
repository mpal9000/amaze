/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Tile;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _botIndicators = require('../bot-indicators');

var _botIndicators2 = _interopRequireDefault(_botIndicators);

/**
 * Component
 */

function Tile() {
  return null;
}

/**
 * Render component.
 */

Tile.render = function render(props) {
  var isActive = props.isActive;
  var isEntry = props.isEntry;
  var isExit = props.isExit;
  var isDragHovered = props.isDragHovered;
  var botIndicators = props.botIndicators;

  var columns = botIndicators.length == 2 ? 2 : Math.ceil(Math.sqrt(botIndicators.length));

  return (0, _mercury.h)('div', {
    className: (0, _classnames2['default'])({
      'amaze-Tile': true,
      'amaze-Tile--active': isActive,
      'amaze-Tile--entry': isEntry,
      'amaze-Tile--exit': isExit,
      'amaze-Tile--hasBotIndicators': botIndicators.length > 0,
      'amaze-Tile--dragHovered': isDragHovered
    }),
    style: botIndicators.length > 0 ? { cursor: 'default' } : {}
  }, _mercury2['default'].partial(_botIndicators2['default'].render, columns, botIndicators));
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map