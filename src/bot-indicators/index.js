/**
 * Module dependencies
 */

import map from 'ramda/src/map';
import addIndex from 'ramda/src/addIndex';
import partial from 'ramda/src/partial';
import hg, { h } from 'mercury';

import Indicator from './indicator';

const mapIndexed = addIndex(map);

/**
 * Component
 */

export default function BotIndicators() {
  return null;
}

/**
 * Render component.
 */

BotIndicators.render = function render(columns, botIndicators) {
  const margin = 0; // percent
  const cellWidth = 100 / columns - 2 * margin; // percent

  const renderCell = partial(
    hg.partial, Indicator.render, columns, cellWidth, margin
  );
  const renderCells = mapIndexed(renderCell);

  return h(
    '.amaze-BotIndicators.u-cf',
    // { style: { padding: `${margin / 2}%` } }, //REF//
    renderCells(botIndicators)
  );
};
