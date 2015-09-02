/**
 * Module dependencies
 */

import hg, { h } from 'mercury';
import cx from 'classnames';
import dbg from 'debug';

import { sendTapStart, sendTapEnd, sendTapCancel } from '../gestures';

const debug = dbg('amaze:button');

/**
 * Component
 */

export default function Button() {
  return hg.state({
    isActive: hg.value(false),
    channels: { onTapStart, onTapEnd, onTapCancel },
  });
}

/**
 * Render component.
 */

Button.render = function render(state, props = {}) {
  debug('render()');
  const {
    ['ev-event']: evEvent,
    ['ev-click']: evClick,
    isTapped,
    className,
    children,
    ...rest,
  } = props;

  const defaultHandlers = [
    sendTapStart(state.channels.onTapStart),
    sendTapEnd(state.channels.onTapEnd),
    sendTapCancel(state.channels.onTapCancel),
  ];

  const handlers = defaultHandlers.concat(
    evEvent ? Array.isArray(evEvent) ? evEvent : [evEvent] : []
  );

  return h(
    'button.amaze-Button',
    Object.assign(
      {
        type: 'button',
        ...rest,
        className: cx(
          state.isActive && 'amaze-Button--active',
          className
        ),
      },
      evClick
        ? { 'ev-click': evClick }
        : { 'ev-event': handlers }
    ),
    children
  );
}

/**
 *
 */

function onTapStart(state) {
  state.isActive.set(true);
}

/**
 *
 */

function onTapEnd(state) {
  state.isActive.set(false);
}

/**
 *
 */

function onTapCancel(state) {
  state.isActive.set(false);
}
