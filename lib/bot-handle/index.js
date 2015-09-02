/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BotHandle;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _gestures = require('../gestures');

var _dragEventsSource = require('../drag-events/source');

var _dragEventsSource2 = _interopRequireDefault(_dragEventsSource);

/**
 * Component
 */

function BotHandle() {
  return _mercury2['default'].state({
    isDragged: _mercury2['default'].value(false),
    channels: { onDrag: onDrag }
  });
}

/**
 * Render component.
 */

BotHandle.render = function render(state, props) {
  var isDragged = state.isDragged;
  var channels = state.channels;
  var botIdentity = props.botIdentity;
  var addBotRandomly = props.addBotRandomly;
  var disabled = props.disabled;

  return (0, _mercury.h)('.amaze-BotHandle', (0, _mercury.h)('div', _Object$assign({
    title: 'Drag in or double tap to add a new Bot',
    draggable: !disabled,
    className: (0, _classnames2['default'])({
      'amaze-BotHandle-draggable': true,
      'amaze-BotHandle-draggable--disabled': disabled,
      'amaze-BotHandle-draggable--dragged': isDragged
    }),
    style: {
      backgroundColor: 'rgb(' + botIdentity.color.join() + ')'
    }
  }, !disabled ? {
    'ev-event': [(0, _dragEventsSource2['default'])(channels.onDrag, { botIdentity: botIdentity }), (0, _gestures.sendDoubleTap)(addBotRandomly, _Object$assign({}, botIdentity))]
  } : {})));
};

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragstart':
      return onDragstart(state, data);
    // case 'drag': return _onDrag(state, data);
    case 'dragend':
      return onDragend(state, data);
    // no default
  }
}

/**
 *
 */

function onDragstart(state, data) {
  state.isDragged.set(true);

  var dataToTransfer = JSON.stringify(data.botIdentity);
  data.dataTransfer.setData('text/plain', dataToTransfer);
}

/**
 *
 */

function onDragend(state) {
  state.isDragged.set(false);
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map