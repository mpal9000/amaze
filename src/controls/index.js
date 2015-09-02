/**
 * Module dependencies
 */

import partialRight from 'ramda/src/partialRight';
import _memoize from 'memoizee';
import hg, { h } from 'mercury';

import { sendTap } from '../gestures';
import Logo from '../logo';
import BotHandle from '../bot-handle';
import Button from '../button';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Controls({ undo, redo }) {
  return hg.state({
    startPauseBtn: Button(),
    resetBtn: Button(),
    undoBtn: Button(),
    redoBtn: Button(),
    botHandle: BotHandle(),
    channels: { undo, redo },
  });
}

/**
 * Render component.
 */

const startPauseBtnProps = memoize((isReady, isRunning, onStart, onPause, onReset, winners) => {
  const disabled = !isReady;

  return Object.assign({
    disabled,
    className: isRunning ? 'amaze-Button--pause' : 'amaze-Button--start',
    children: winners ? 'New' : isRunning ? 'Pause' : 'Start',
  }, !disabled ? {
    'ev-event': sendTap(winners ? onReset : isRunning ? onPause : onStart),
  } : {});
});

const resetBtnProps = memoize((isRunning, onReset, winners) => {
  const disabled = isRunning || winners && winners.length;

  return Object.assign({
    disabled,
    children: 'Reset',
  }, !disabled ? {
    'ev-event': sendTap(onReset),
  } : {});
});

const undoBtnProps = memoize((undo, isStarted) => {
  const disabled = isStarted;

  return Object.assign({
    disabled,
    children: 'Undo',
  }, !disabled ? {
    'ev-click': hg.sendClick(undo),
  } : {});
});

const redoBtnProps = memoize((redo, isStarted) => {
  const disabled = isStarted;

  return Object.assign({
    disabled,
    children: 'Redo',
  }, !disabled ? {
    'ev-click': hg.sendClick(redo),
  } : {});
});

const botHandleProps = memoize((botIdentity, addBotRandomly, isStarted) => {
  const disabled = isStarted;

  return { botIdentity, addBotRandomly, disabled };
});

Controls.render = function render(state, props) {
  const {
    botIdentity,
    isReady, isStarted, isRunning,
    onStart, onPause, onReset,
    winners,
  } = props;

  return h('section.amaze-Controls.u-cf', [
    hg.partial(Logo.render),

    h('.amaze-Controls-buttons.u-cf', [
      hg.partial(
        Button.render,
        state.startPauseBtn,
        startPauseBtnProps(isReady, isRunning, onStart, onPause, onReset, winners)
      ),

      hg.partial(
        Button.render,
        state.resetBtn,
        resetBtnProps(isRunning, onReset, winners)
      ),

      hg.partial(
        Button.render,
        state.undoBtn,
        undoBtnProps(state.channels.undo, isStarted)
      ),

      hg.partial(
        Button.render,
        state.redoBtn,
        redoBtnProps(state.channels.redo, isStarted)
      ),
    ]),

    hg.partial(
      BotHandle.render,
      state.botHandle,
      botHandleProps(botIdentity, props.addBotRandomly, isStarted)
    ),
  ]);
}
