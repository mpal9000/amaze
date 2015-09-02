/**
 * Module dependencies
 */

import partialRight from 'ramda/src/partialRight';
import _memoize from 'memoizee';
import _props from 'ramda/src/props';
import hg, { h } from 'mercury';

import Grid from '../grid';
import Controls from '../controls';
import Results from '../results';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Board(opts) {
  const { undo, redo } = opts;

  return hg.state({
    controls: Controls({ undo, redo }),
  });
}

/**
 * Render component.
 */

const gridProps = memoize((columns, margin, cells, bots, checkReadyState, isStarted) => {
  return { columns, margin, cells, bots, checkReadyState, isStarted };
});

const controlsProps = memoize((botIdentity, isReady, isRunning, onStart, onPause, onReset, addBotRandomly, isStarted, winners) => {
  return {
    botIdentity, isReady, isRunning, onStart, onPause, onReset,
    addBotRandomly, isStarted, winners,
  };
});

const resultsProps = memoize((bots, winners) => {
  return { bots, winners };
});

Board.render = function render(state, props) {
  const { controls } = state;

  return h(
    'section.amaze-Board',
    [
      hg.partial(renderContent, props),

      hg.partial(Controls.render, controls, controlsProps(
        ..._props([
          'botIdentity', 'isReady', 'isRunning',
          'onStart', 'onPause', 'onReset',
          'addBotRandomly', 'isStarted', 'winners',
        ], props)
      )),
    ]
  );
}

/**
 *
 */

function renderContent(props) {
  return h('.amaze-Board-content', [
    hg.partial(Grid.render, gridProps(
      ..._props([
        'columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted',
      ], props)
    )),

    props.winners && hg.partial(Results.render, resultsProps(
      props.bots, props.winners
    )),
  ]);
}
