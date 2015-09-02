/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Controls;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _gestures = require('../gestures');

var _logo = require('../logo');

var _logo2 = _interopRequireDefault(_logo);

var _botHandle = require('../bot-handle');

var _botHandle2 = _interopRequireDefault(_botHandle);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Controls(_ref) {
  var undo = _ref.undo;
  var redo = _ref.redo;

  return _mercury2['default'].state({
    startPauseBtn: (0, _button2['default'])(),
    resetBtn: (0, _button2['default'])(),
    undoBtn: (0, _button2['default'])(),
    redoBtn: (0, _button2['default'])(),
    botHandle: (0, _botHandle2['default'])(),
    channels: { undo: undo, redo: redo }
  });
}

/**
 * Render component.
 */

var startPauseBtnProps = memoize(function (isReady, isRunning, onStart, onPause, onReset, winners) {
  var disabled = !isReady;

  return _Object$assign({
    disabled: disabled,
    className: isRunning ? 'amaze-Button--pause' : 'amaze-Button--start',
    children: winners ? 'New' : isRunning ? 'Pause' : 'Start'
  }, !disabled ? {
    'ev-event': (0, _gestures.sendTap)(winners ? onReset : isRunning ? onPause : onStart)
  } : {});
});

var resetBtnProps = memoize(function (isRunning, onReset, winners) {
  var disabled = isRunning || winners && winners.length;

  return _Object$assign({
    disabled: disabled,
    children: 'Reset'
  }, !disabled ? {
    'ev-event': (0, _gestures.sendTap)(onReset)
  } : {});
});

var undoBtnProps = memoize(function (undo, isStarted) {
  var disabled = isStarted;

  return _Object$assign({
    disabled: disabled,
    children: 'Undo'
  }, !disabled ? {
    'ev-click': _mercury2['default'].sendClick(undo)
  } : {});
});

var redoBtnProps = memoize(function (redo, isStarted) {
  var disabled = isStarted;

  return _Object$assign({
    disabled: disabled,
    children: 'Redo'
  }, !disabled ? {
    'ev-click': _mercury2['default'].sendClick(redo)
  } : {});
});

var botHandleProps = memoize(function (botIdentity, addBotRandomly, isStarted) {
  var disabled = isStarted;

  return { botIdentity: botIdentity, addBotRandomly: addBotRandomly, disabled: disabled };
});

Controls.render = function render(state, props) {
  var botIdentity = props.botIdentity;
  var isReady = props.isReady;
  var isStarted = props.isStarted;
  var isRunning = props.isRunning;
  var onStart = props.onStart;
  var onPause = props.onPause;
  var onReset = props.onReset;
  var winners = props.winners;

  return (0, _mercury.h)('section.amaze-Controls.u-cf', [_mercury2['default'].partial(_logo2['default'].render), (0, _mercury.h)('.amaze-Controls-buttons.u-cf', [_mercury2['default'].partial(_button2['default'].render, state.startPauseBtn, startPauseBtnProps(isReady, isRunning, onStart, onPause, onReset, winners)), _mercury2['default'].partial(_button2['default'].render, state.resetBtn, resetBtnProps(isRunning, onReset, winners)), _mercury2['default'].partial(_button2['default'].render, state.undoBtn, undoBtnProps(state.channels.undo, isStarted)), _mercury2['default'].partial(_button2['default'].render, state.redoBtn, redoBtnProps(state.channels.redo, isStarted))]), _mercury2['default'].partial(_botHandle2['default'].render, state.botHandle, botHandleProps(botIdentity, props.addBotRandomly, isStarted))]);
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map