/**
 * Module dependencies
 */

import Duration from 'duration-js';
import map from 'ramda/src/map';
import addIndex from 'ramda/src/addIndex';
import partial from 'ramda/src/partial';
import hg, { h } from 'mercury';

import Scrollable from '../scrollable';

const mapIndexed = addIndex(map);

/**
 * Component
 */

export default function Results() {
  return null;
}

/**
 *
 */

function getResults(props) {
  return props.winners.map(winner => {
    const bot = props.bots[winner.id];
    return {
      id: bot.id,
      color: bot.color,
      time: winner.time,
    };
  });
}

/**
 * Render component.
 */

Results.render = function render(props) {
  const results = getResults(props);

  return h(
    'section.amaze-Results',
    new Scrollable(hg.partial(renderContent, results), {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    })
  );
}

/**
 *
 */

function renderContent(results) {
  return h('.amaze-Results-content', [
    h('h1', 'Results'),

    hg.partial(renderTable, results),
  ]);
}

/**
 *
 */

function renderTable(results) {
  return h('table.amaze-Results-table', [
    hg.partial(renderHeaders, ['Place', 'Bot', 'Time']),

    ...mapIndexed(partial(hg.partial, renderRow), results),
  ]);
}

/**
 *
 */

function renderHeaders(texts) {
  return h('tr', map(renderHeader, texts));
}

/**
 *
 */

function renderHeader(text) {
  return h('th', h('span', text));
}

/**
 *
 */

function renderRow(result, index) {
  return h('tr', [
    h('td', `${index + 1}`),

    h('td', hg.partial(renderBot, result)),

    h('td', `${new Duration(result.time).toString()}`),
  ]);
}

/**
 *
 */

function renderBot(result) {
  const color = `rgb(${result.color.join()})`;

  return h(
    '.amaze-Results-botWrapper',
    h('.amaze-Results-bot', {
      style: { 'background-color': color },
    })
  );
}
