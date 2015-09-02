/**
 * Module dependencies
 */

import partialRight from 'ramda/src/partialRight';
import _memoize from 'memoizee';
import { h } from 'mercury';

const memoize = partialRight(_memoize, { max: 1 });

/**
 * Component
 */

export default function Indicator() {
  return null;
}

/**
 * Render component.
 */

const indicatorStyle = memoize((columns, width, margin = 0, col) => {
  return  {
    width: `${width}%`,
    'padding-bottom': `${width}%`,
    margin: `${margin}%`,
    clear: col == 0
      ? 'left'
      : col == columns - 1
         ? 'right'
         : 'none', // TODO: Consider to not assign `clear: 'none'`
  };
});

Indicator.render = function render(columns, width, margin, botIndicator, index) {
  const row = Math.floor(index / columns);
  const col = index - row * columns;

  return h(
    '.amaze-BotIndicators-indicator',
    {
      key: botIndicator.id,
      style: indicatorStyle(columns, width, margin, col),
    },
    h('.amaze-BotIndicators-indicatorContent', {
      style: {
        backgroundColor: `rgb(${botIndicator.color.join()})`,
      },
    })
  );
}
