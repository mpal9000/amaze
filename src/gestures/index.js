/**
 * Module dependencies
 */

import partial from 'ramda/src/partial';
import hg from 'mercury';

import { handleGesture } from './events';

/**
 *
 */

const PREVENT_DEFUALT_EVENTS = [
  'longtap', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'touchmove',
];

/**
 *
 */

export const sendTapStart = hg.BaseEvent(partial(sendEvent, 'tapstart'));
export const sendTapMove = hg.BaseEvent(partial(sendEvent, 'tapmove'));
export const sendTapEnd = hg.BaseEvent(partial(sendEvent, 'tapend'));
export const sendTapCancel = hg.BaseEvent(partial(sendEvent, 'tapcancel'));
export const sendTap = hg.BaseEvent(partial(sendEvent, 'tap'));
export const sendLongTap = hg.BaseEvent(partial(sendEvent, 'longtap'));
export const sendDoubleTap = hg.BaseEvent(partial(sendEvent, 'doubletap'));
export const sendSwipeUp = hg.BaseEvent(partial(sendEvent, 'swipeup'));
export const sendSwipeRight = hg.BaseEvent(partial(sendEvent, 'swiperight'));
export const sendSwipeDown = hg.BaseEvent(partial(sendEvent, 'swipedown'));
export const sendSwipeLeft = hg.BaseEvent(partial(sendEvent, 'swipeleft'));

/**
 *
 */

function sendEvent(type, ev, _broadcast) {
  if (~PREVENT_DEFUALT_EVENTS.indexOf(type)) {
    if (ev._rawEvent.preventDefault) {
      ev._rawEvent.preventDefault();
    }
  }

  handleGesture.call(this, ev, broadcast);

  function broadcast(data) {
    if (data.type === type) {
      _broadcast(data);
    }
  }
}
