/**
 * Module dependencies
 */

import map from 'ramda/src/map';
import partial from 'ramda/src/partial';
import { h } from 'mercury';

/**
 * Component
 */

export default function Logo() {
  return null;
}

/**
 * Render component.
 */

Logo.render = function render() {
  const renderChar = partial(h, 'span');
  const renderChars = map(renderChar);

  const text = 'amaze';
  return h('h3.amaze-Logo', renderChars(text.split('')));
}
