/**
 *
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.randomRgbColor = randomRgbColor;
exports.randomIntFromRange = randomIntFromRange;
exports.ln = ln;

function randomRgbColor() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var value = randomIntFromRange;
  var r = opts.r || [0, 255];
  var g = opts.g || [0, 255];
  var b = opts.b || [0, 255];

  return [value.apply(undefined, _toConsumableArray(r)), value.apply(undefined, _toConsumableArray(g)), value.apply(undefined, _toConsumableArray(b))];
}

/**
 * Returns a random integer between
 * `min` and `max` inclusive.
 */

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 */

function ln(_strings) {
  var strings = _strings.slice();
  var str = '';

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  while (strings.length || values.length) {
    str += strings.shift() || '';
    str += values.shift() || '';
  }

  return str.replace(/\s{2,}/gm, ' ');
}
//# sourceMappingURL=util.js.map