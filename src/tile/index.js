/**
 * Module dependencies
 */

import hg, { h } from 'mercury';
import cx from 'classnames';

import BotIndicators from '../bot-indicators';

/**
 * Component
 */

export default function Tile() {
  return null;
}

/**
 * Render component.
 */

Tile.render = function render(props) {
  const { isActive, isEntry, isExit, isDragHovered, botIndicators } = props;

  const columns = botIndicators.length == 2
    ? 2
    : Math.ceil(Math.sqrt(botIndicators.length));

  return h('div', {
    className: cx({
      'amaze-Tile': true,
      'amaze-Tile--active': isActive,
      'amaze-Tile--entry': isEntry,
      'amaze-Tile--exit': isExit,
      'amaze-Tile--hasBotIndicators': botIndicators.length > 0,
      'amaze-Tile--dragHovered': isDragHovered,
    }),
    style: botIndicators.length > 0 ? { cursor: 'default' } : {},
  }, hg.partial(BotIndicators.render, columns, botIndicators));
}
