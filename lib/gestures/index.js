/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _events = require('./events');

/**
 *
 */

var PREVENT_DEFUALT_EVENTS = ['longtap', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'touchmove'];

/**
 *
 */

var sendTapStart = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapstart'));
exports.sendTapStart = sendTapStart;
var sendTapMove = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapmove'));
exports.sendTapMove = sendTapMove;
var sendTapEnd = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapend'));
exports.sendTapEnd = sendTapEnd;
var sendTapCancel = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapcancel'));
exports.sendTapCancel = sendTapCancel;
var sendTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tap'));
exports.sendTap = sendTap;
var sendLongTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'longtap'));
exports.sendLongTap = sendLongTap;
var sendDoubleTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'doubletap'));
exports.sendDoubleTap = sendDoubleTap;
var sendSwipeUp = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipeup'));
exports.sendSwipeUp = sendSwipeUp;
var sendSwipeRight = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swiperight'));
exports.sendSwipeRight = sendSwipeRight;
var sendSwipeDown = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipedown'));
exports.sendSwipeDown = sendSwipeDown;
var sendSwipeLeft = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipeleft'));

exports.sendSwipeLeft = sendSwipeLeft;
/**
 *
 */

function sendEvent(type, ev, _broadcast) {
  if (~PREVENT_DEFUALT_EVENTS.indexOf(type)) {
    if (ev._rawEvent.preventDefault) {
      ev._rawEvent.preventDefault();
    }
  }

  _events.handleGesture.call(this, ev, broadcast);

  function broadcast(data) {
    if (data.type === type) {
      _broadcast(data);
    }
  }
}
//# sourceMappingURL=index.js.map