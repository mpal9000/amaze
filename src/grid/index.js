/**
 * Module dependencies
 */

import values from 'ramda/src/values';
import _memoize from 'memoizee';
import partialRight from 'ramda/src/partialRight';
import groupBy from 'ramda/src/groupBy';
import prop from 'ramda/src/prop';
import _props from 'ramda/src/props';
import hg, { h } from 'mercury';

import Cells from './cells';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Grid() {
  return null;
}

/**
 * Render component.
 */

const cellsProps = memoize((columns, margin, cells, bots, checkReadyState, isStarted) => {
  const botsByIndex = groupBy(prop('index'), values(bots));
  return { columns, margin, cells, botsByIndex, checkReadyState, isStarted };
});

Grid.render = function render(props) {
  return h(
    'section.amaze-Grid',
    h('.amaze-Grid-background',
      hg.partial(Cells.render, cellsProps(
        ..._props([
          'columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted',
        ], props)
      )))
  );
}
