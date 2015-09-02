/**
 *
 */

export function randomRgbColor(opts = {}) {
  const value = randomIntFromRange;
  const r = opts.r || [0, 255];
  const g = opts.g || [0, 255];
  const b = opts.b || [0, 255];

  return [value(...r), value(...g), value(...b)];
}

/**
 * Returns a random integer between
 * `min` and `max` inclusive.
 */

export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 */

export function ln(_strings, ...values) {
  const strings = _strings.slice();
  let str = '';

  while (strings.length || values.length) {
    str += strings.shift() || '';
    str += values.shift() || '';
  }

  return str.replace(/\s{2,}/gm, ' ');
}
