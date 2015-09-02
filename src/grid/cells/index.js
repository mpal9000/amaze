/**
 * Module dependencies
 */

import map from 'ramda/src/map';
import partialRight from 'ramda/src/partialRight';
import _memoize from 'memoizee';
import values from 'ramda/src/values';
import pick from 'ramda/src/pick';
import hg, { h } from 'mercury';

import Cell from '../../cell';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Cells() {
  return null;
}

/**
 * Render component.
 */

// TODO: Check if need a `key` prop
const cellProps = memoize((width, margin, checkReadyState, isStarted) => {
  return { width, margin, checkReadyState, isStarted };
});

Cells.render = function render({ columns, margin = 0, cells, botsByIndex, checkReadyState, isStarted }) {
  const cellWidth = 100 / columns - 2 * margin; // percent

  const renderCell = cell => hg.partial(
    Cell.render,
    cell,
    cellProps(cellWidth, margin, checkReadyState, isStarted),
    getBotIndicatorsOfCell(botsByIndex, cell.index)
  );
  const renderCells = map(renderCell);

  return h(
    '.amaze-Grid-cells.u-cf',
    { style: { padding: `${margin / 2}%` } },
    renderCells(values(cells))
  );
};

/**
 *
 */

const extractBotIdentity = pick(['id', 'color']);
const extractBotIndicators = memoize(botsOnCell => {
  return map(extractBotIdentity, botsOnCell);
});
// We need the same array reference in case there are
// no bot indicators on a cell, in order to render only
// the "changed" cells via `hg.partial()`
const emptyBotIndicators = [];

function getBotIndicatorsOfCell(botsByIndex, index) {
  const botsOnCell = botsByIndex[index];
  return botsOnCell
    ? extractBotIndicators(botsOnCell)
    : emptyBotIndicators;
}
