/**
 * Based on https://github.com/GianlucaGuarini/Tocca.js, MIT license
 */

/**
 * Module dependencies
 */

import hg from 'mercury';

/**
 *
 */

const TOUCH_EVENTS = [
  'touchstart', 'touchmove', 'touchend', 'touchcancel',
];

const MOUSE_EVENTS = [
  'mousedown', 'mousemove', 'mouseup', 'mouseout',
];

const EVENTS = TOUCH_EVENTS.concat(MOUSE_EVENTS);

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

const swipeThreshold = 100;
// Range of time where a tap event could be detected
const tapThreshold = 150;
// Delay needed to detect a double tap
const doubletapThreshold = 200;
// Delay needed to detect a long tap
const longtapThreshold = 1000;
// Touch events boundaries (60px by default)
const tapPrecision = 60 / 2;
// const justTouchEvents = window.JUST_ON_TOUCH_DEVICES || isTouch; //REF//

/**
 *
 */

export default hg.BaseEvent(handleGesture);

export function handleGesture(ev, broadcast) {
  // Ignore other events
  if (!isKnownEvent(ev)) return;

  const data = this.data;
  const delegator = hg.Delegator();
  const _target = ev.currentTarget;
  let listenersAdded = false; // TODO: Check if can remove this
  let tapNum = 0;
  let currX, currY, cachedX, cachedY;
  let tapTimer, timestamp, target;

  /**
   *
   */

  if (ev.type === 'touchstart' || ev.type === 'mousedown') {
    const triggerTapStart = !listenersAdded;
    const isTouch = ev.type === 'touchstart';

    addListeners(isTouch);

    if (triggerTapStart) tapStart(ev);
  }

  /**
   *
   */

  function tapStart(e) {
    if (!triggeredOnBoundElement(e)) return;

    const pointer = getPointerEvent(e);
    cachedX = currX = pointer.pageX;
    cachedY = currY = pointer.pageY;

    timestamp = getTimestamp();
    tapNum++;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapstart',
      target: e.target,
    }));
  }

  /**
   *
   */

  function tapMove(e) {
    if (!triggeredOnBoundElement(e)) return;

    const pointer = getPointerEvent(e);

    currX = pointer.pageX;
    currY = pointer.pageY;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapmove',
      target: e.target,
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

    const eventTypes = [];
    const now = getTimestamp();
    const deltaX = cachedX - currX;
    const deltaY = cachedY - currY;

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
      for (let i = 0, l = eventTypes.length; i < l; ++i) {
        const type = eventTypes[i];

        broadcast(addData({
          // _rawEvent: e, //REF//
          type,
          target: e.target,
          distance: {
            x: Math.abs(deltaX),
            y: Math.abs(deltaY),
          },
        }));

        removeListeners(isTouchEvent(e));
      }
    }

    else {
      // TODO: "longtap" prevents normal "tap",
      // maybe it's better to trigger also "tap",
      // along with "longtap" event
      if (cachedX >= currX - tapPrecision
          && cachedX <= currX + tapPrecision
          && cachedY >= currY - tapPrecision
          && cachedY <= currY + tapPrecision) {
        if (timestamp + tapThreshold - now >= 0) {
          const type = tapNum === 2 && target === e.target
            ? 'doubletap'
            : 'tap';

          broadcast(addData({
            // _rawEvent: e, //REF//
            type,
            target: e.target,
          }));

          target = e.target; // TOOD: Check if can remove this
        }

        else if (timestamp + longtapThreshold - now <= 0) {
          broadcast(addData({
            // _rawEvent: e, //REF//
            type: 'longtap',
            target: e.target,
          }));

          target = e.target; // TOOD: Check if can remove this
        }
      }

      tapTimer = setTimeout(() => {
        removeListeners(isTouchEvent(e));

        tapNum = 0;
      }, doubletapThreshold);
    }

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapend',
      target: e.target,
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
      target: e.target,
    }));

    clearTimeout(tapTimer);
    tapNum = 0;

    removeListeners(isTouchEvent(e));
  }

  /**
   *
   */

  function addData(additional) {
    return Object.assign({}, data, additional);
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

  function addListeners(isTouch = false) {
    if (listenersAdded) return;

    if (isTouch) {
      delegator.listenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.addGlobalEventListener('touchstart', tapStart);

      delegator.addGlobalEventListener('touchmove', tapMove);

      delegator.addGlobalEventListener('touchend', tapEnd);

      delegator.addGlobalEventListener('touchcancel', tapCancel);
    }

    else {
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

  function removeListeners(isTouch = false) {
    if (!listenersAdded) return;

    if (isTouch) {
      delegator.unlistenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.removeGlobalEventListener('touchstart', tapStart);

      delegator.removeGlobalEventListener('touchmove', tapMove);

      delegator.removeGlobalEventListener('touchend', tapEnd);

      delegator.removeGlobalEventListener('touchcancel', tapCancel);
    }

    else {
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
  if (!~EVENTS.indexOf(ev.type)) return false;

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
  const raw = ev._rawEvent;
  return raw.targetTouches ? raw.targetTouches[0] : raw;
}

/**
 *
 */

function getTimestamp() {
  return new Date().getTime();
}
