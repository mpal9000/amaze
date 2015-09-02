/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Indicator;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _mercury = require('mercury');

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Indicator() {
  return null;
}

/**
 * Render component.
 */

var indicatorStyle = memoize(function (columns, width, margin, col) {
  if (margin === undefined) margin = 0;

  return {
    width: width + '%',
    'padding-bottom': width + '%',
    margin: margin + '%',
    clear: col == 0 ? 'left' : col == columns - 1 ? 'right' : 'none' };
});

// TODO: Consider to not assign `clear: 'none'`
Indicator.render = function render(columns, width, margin, botIndicator, index) {
  var row = Math.floor(index / columns);
  var col = index - row * columns;

  return (0, _mercury.h)('.amaze-BotIndicators-indicator', {
    key: botIndicator.id,
    style: indicatorStyle(columns, width, margin, col)
  }, (0, _mercury.h)('.amaze-BotIndicators-indicatorContent', {
    style: {
      backgroundColor: 'rgb(' + botIndicator.color.join() + ')'
    }
  }));
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map