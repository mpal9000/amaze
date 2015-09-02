/**
 * Module dependencies
 */

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Button;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gestures = require('../gestures');

/**
 * Component
 */

function Button() {
  return _mercury2['default'].state({
    isActive: _mercury2['default'].value(false),
    channels: { onTapStart: onTapStart, onTapEnd: onTapEnd, onTapCancel: onTapCancel }
  });
}

/**
 * Render component.
 */

Button.render = function render(state) {
  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var evEvent = props['ev-event'];
  var evClick = props['ev-click'];
  var isTapped = props.isTapped;
  var className = props.className;
  var children = props.children;

  var rest = _objectWithoutProperties(props, ['ev-event', 'ev-click', 'isTapped', 'className', 'children']);

  var defaultHandlers = [(0, _gestures.sendTapStart)(state.channels.onTapStart), (0, _gestures.sendTapEnd)(state.channels.onTapEnd), (0, _gestures.sendTapCancel)(state.channels.onTapCancel)];

  var handlers = defaultHandlers.concat(evEvent ? Array.isArray(evEvent) ? evEvent : [evEvent] : []);

  return (0, _mercury.h)('button.amaze-Button', _Object$assign(_extends({
    type: 'button'
  }, rest, {
    className: (0, _classnames2['default'])(state.isActive && 'amaze-Button--active', className)
  }), evClick ? { 'ev-click': evClick } : { 'ev-event': handlers }), children);
};

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
module.exports = exports['default'];
//# sourceMappingURL=index.js.map