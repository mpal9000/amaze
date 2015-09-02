/**
 * Module dependencies
 */

import cx from 'classnames';
import hg, { h } from 'mercury';

import { sendDoubleTap } from '../gestures';
import dragSourceEvents from '../drag-events/source';

/**
 * Component
 */

export default function BotHandle() {
  return hg.state({
    isDragged: hg.value(false),
    channels: { onDrag },
  });
}

/**
 * Render component.
 */

BotHandle.render = function render(state, props) {
  const { isDragged, channels } = state;
  const { botIdentity, addBotRandomly, disabled } = props;

  return h(
    '.amaze-BotHandle',
    h('div', Object.assign({
      title: 'Drag in or double tap to add a new Bot',
      draggable: !disabled,
      className: cx({
        'amaze-BotHandle-draggable': true,
        'amaze-BotHandle-draggable--disabled': disabled,
        'amaze-BotHandle-draggable--dragged': isDragged,
      }),
      style: {
        backgroundColor: `rgb(${botIdentity.color.join()})`,
      },
    }, !disabled ? {
      'ev-event': [
        dragSourceEvents(channels.onDrag, { botIdentity }),
        sendDoubleTap(addBotRandomly, Object.assign({}, botIdentity)),
      ],
    } : {}))
  );
}

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragstart': return onDragstart(state, data);
    // case 'drag': return _onDrag(state, data);
    case 'dragend': return onDragend(state, data);
    // no default
  }
}

/**
 *
 */

function onDragstart(state, data) {
  state.isDragged.set(true);

  const dataToTransfer = JSON.stringify(data.botIdentity);
  data.dataTransfer.setData('text/plain', dataToTransfer);
}

/**
 *
 */

function onDragend(state) {
  state.isDragged.set(false);
}
