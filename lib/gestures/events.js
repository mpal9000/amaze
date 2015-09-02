/**
 * Based on https://github.com/GianlucaGuarini/Tocca.js, MIT license
 */

/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleGesture = handleGesture;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

/**
 *
 */

var TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseout'];

var EVENTS = TOUCH_EVENTS.concat(MOUSE_EVENTS);

/**
 *
 */

// Some helpers borrowed from https://github.com/WebReflection/ie-touch
/*const msPointerEnabled = !!navigator.pointerEnabled
  || navigator.msPointerEnabled;*/ //REF//
/*const isTouch = (!!('ontouchstart' in window)
  && navigator.userAgent.indexOf('PhantomJS') < 0)
  || msPointerEnabled;*/ //REF//
/*function msEventType(type) {
  const lo = type.toLowerCase();
  const ms = `MS${type}`;
  return navigator.msPointerEnabled ? ms : lo;
}*/ //REF//
/*const touchevents = {
  touchstart: `${msEventType('PointerDown')} touchstart`,
  touchend: `${msEventType('PointerUp')} touchend`,
  touchmove: `${msEventType('PointerMove')} touchmove`,
};*/ //REF//

/**
 *
 */

var swipeThreshold = 100;
// Range of time where a tap event could be detected
var tapThreshold = 150;
// Delay needed to detect a double tap
var doubletapThreshold = 200;
// Delay needed to detect a long tap
var longtapThreshold = 1000;
// Touch events boundaries (60px by default)
var tapPrecision = 60 / 2;
// const justTouchEvents = window.JUST_ON_TOUCH_DEVICES || isTouch; //REF//

/**
 *
 */

exports['default'] = _mercury2['default'].BaseEvent(handleGesture);

function handleGesture(ev, broadcast) {
  // Ignore other events
  if (!isKnownEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget;
  var listenersAdded = false; // TODO: Check if can remove this
  var tapNum = 0;
  var currX = undefined,
      currY = undefined,
      cachedX = undefined,
      cachedY = undefined;
  var tapTimer = undefined,
      timestamp = undefined,
      target = undefined;

  /**
   *
   */

  if (ev.type === 'touchstart' || ev.type === 'mousedown') {
    var triggerTapStart = !listenersAdded;
    var isTouch = ev.type === 'touchstart';

    addListeners(isTouch);

    if (triggerTapStart) tapStart(ev);
  }

  /**
   *
   */

  function tapStart(e) {
    if (!triggeredOnBoundElement(e)) return;

    var pointer = getPointerEvent(e);
    cachedX = currX = pointer.pageX;
    cachedY = currY = pointer.pageY;

    timestamp = getTimestamp();
    tapNum++;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapstart',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapMove(e) {
    if (!triggeredOnBoundElement(e)) return;

    var pointer = getPointerEvent(e);

    currX = pointer.pageX;
    currY = pointer.pageY;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapmove',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapEnd(e) {
    if (!triggeredOnBoundElement(e)) return;

    // This leads to a warning on Chrome,
    // but is required to not fire both touchstart
    // and mousedown events on touch devices
    if (e._rawEvent.preventDefault) {
      e._rawEvent.preventDefault();
    }

    var eventTypes = [];
    var now = getTimestamp();
    var deltaX = cachedX - currX;
    var deltaY = cachedY - currY;

    clearTimeout(tapTimer);

    if (deltaX <= -swipeThreshold) {
      eventTypes.push('swiperight');
    }

    if (deltaX >= swipeThreshold) {
      eventTypes.push('swipeleft');
    }

    if (deltaY <= -swipeThreshold) {
      eventTypes.push('swipedown');
    }

    if (deltaY >= swipeThreshold) {
      eventTypes.push('swipeup');
    }

    if (eventTypes.length) {
      for (var i = 0, l = eventTypes.length; i < l; ++i) {
        var type = eventTypes[i];

        broadcast(addData({
          // _rawEvent: e, //REF//
          type: type,
          target: e.target,
          distance: {
            x: Math.abs(deltaX),
            y: Math.abs(deltaY)
          }
        }));

        removeListeners(isTouchEvent(e));
      }
    } else {
      // TODO: "longtap" prevents normal "tap",
      // maybe it's better to trigger also "tap",
      // along with "longtap" event
      if (cachedX >= currX - tapPrecision && cachedX <= currX + tapPrecision && cachedY >= currY - tapPrecision && cachedY <= currY + tapPrecision) {
        if (timestamp + tapThreshold - now >= 0) {
          var type = tapNum === 2 && target === e.target ? 'doubletap' : 'tap';

          broadcast(addData({
            // _rawEvent: e, //REF//
            type: type,
            target: e.target
          }));

          target = e.target; // TOOD: Check if can remove this
        } else if (timestamp + longtapThreshold - now <= 0) {
            broadcast(addData({
              // _rawEvent: e, //REF//
              type: 'longtap',
              target: e.target
            }));

            target = e.target; // TOOD: Check if can remove this
          }
      }

      tapTimer = setTimeout(function () {
        removeListeners(isTouchEvent(e));

        tapNum = 0;
      }, doubletapThreshold);
    }

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapend',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapCancel(e) {
    if (!triggeredOnBoundElement(e)) return;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapcancel',
      target: e.target
    }));

    clearTimeout(tapTimer);
    tapNum = 0;

    removeListeners(isTouchEvent(e));
  }

  /**
   *
   */

  function addData(additional) {
    return _Object$assign({}, data, additional);
  }

  /**
   *
   */

  function triggeredOnBoundElement(e) {
    return e.target === _target;
  }

  /**
   *
   */

  function addListeners() {
    var isTouch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    if (listenersAdded) return;

    if (isTouch) {
      delegator.listenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.addGlobalEventListener('touchstart', tapStart);

      delegator.addGlobalEventListener('touchmove', tapMove);

      delegator.addGlobalEventListener('touchend', tapEnd);

      delegator.addGlobalEventListener('touchcancel', tapCancel);
    } else {
      delegator.listenTo('mousemove');
      delegator.listenTo('mouseout');

      // TOOD: Check if can remove this
      delegator.addGlobalEventListener('mousedown', tapStart);

      delegator.addGlobalEventListener('mousemove', tapMove);

      delegator.addGlobalEventListener('mouseup', tapEnd);
      delegator.addGlobalEventListener('mouseout', tapEnd);
    }

    listenersAdded = true;
  }

  /**
   *
   */

  function removeListeners() {
    var isTouch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    if (!listenersAdded) return;

    if (isTouch) {
      delegator.unlistenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.removeGlobalEventListener('touchstart', tapStart);

      delegator.removeGlobalEventListener('touchmove', tapMove);

      delegator.removeGlobalEventListener('touchend', tapEnd);

      delegator.removeGlobalEventListener('touchcancel', tapCancel);
    } else {
      delegator.unlistenTo('mousemove');
      delegator.unlistenTo('mouseout');

      // TOOD: Check if can remove this
      delegator.removeGlobalEventListener('mousedown', tapStart);

      delegator.removeGlobalEventListener('mousemove', tapMove);

      delegator.removeGlobalEventListener('mouseup', tapEnd);
      delegator.removeGlobalEventListener('mouseout', tapEnd);
    }

    listenersAdded = false;
  }
}

/**
 *
 */

function isKnownEvent(ev) {
  if (! ~EVENTS.indexOf(ev.type)) return false;

  if (!ev.button) return true;
  return ev.button === 1;
}

/**
 *
 */

function isTouchEvent(ev) {
  return TOUCH_EVENTS.indexOf(ev.type) > -1;
}

/**
 *
 */

function getPointerEvent(ev) {
  var raw = ev._rawEvent;
  return raw.targetTouches ? raw.targetTouches[0] : raw;
}

/**
 *
 */

function getTimestamp() {
  return new Date().getTime();
}
//# sourceMappingURL=events.js.map