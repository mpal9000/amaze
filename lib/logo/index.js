/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Logo;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

/**
 * Component
 */

function Logo() {
  return null;
}

/**
 * Render component.
 */

Logo.render = function render() {
  var renderChar = (0, _ramdaSrcPartial2['default'])(_mercury.h, 'span');
  var renderChars = (0, _ramdaSrcMap2['default'])(renderChar);

  var text = 'amaze';
  return (0, _mercury.h)('h3.amaze-Logo', renderChars(text.split('')));
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map