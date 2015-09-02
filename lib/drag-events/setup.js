/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

/**
 * Drag events
 */

var SOURCE_EVENTS = ['dragstart', 'drag', 'dragend'];
exports.SOURCE_EVENTS = SOURCE_EVENTS;
var TARGET_EVENTS = ['dragenter', 'dragover', 'dragleave', 'drop'];
exports.TARGET_EVENTS = TARGET_EVENTS;
var EVENTS = SOURCE_EVENTS.concat(TARGET_EVENTS);

exports.EVENTS = EVENTS;
/**
 *
 */

exports['default'] = function () {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var mode = opts.mode;
  var events = opts.events;

  var delegator = _mercury2['default'].Delegator();

  return { listenTo: listenTo, unlistenTo: unlistenTo };

  function listenTo() {
    EVENTS.forEach(_listenTo);
  }

  function unlistenTo() {
    EVENTS.forEach(_unlistenTo);
  }

  function _listenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.listenTo(name);
  }

  function _unlistenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.unlistenTo(name);
  }

  function isEventEnabled(name) {
    if (events && ! ~events.indexOf(name)) {
      return false;
    }

    if (!mode) return true;

    if (mode) {
      if (mode === 'source' && ! ~SOURCE_EVENTS.indexOf(name)) {
        return false;
      }

      if (mode === 'target' && ! ~TARGET_EVENTS.indexOf(name)) {
        return false;
      }
    }

    return true;
  }
};
//# sourceMappingURL=setup.js.map