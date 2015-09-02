/**
 * Module dependencies
 */

import hg from 'mercury';

/**
 * Drag events
 */

export const SOURCE_EVENTS = ['dragstart', 'drag', 'dragend'];
export const TARGET_EVENTS = ['dragenter', 'dragover', 'dragleave', 'drop'];
export const EVENTS = SOURCE_EVENTS.concat(TARGET_EVENTS);

/**
 *
 */

export default function (opts = {}) {
  const mode = opts.mode;
  const events = opts.events;

  const delegator = hg.Delegator();

  return { listenTo, unlistenTo };

  function listenTo() {
    EVENTS.forEach(_listenTo);
  }

  function unlistenTo() {
    EVENTS.forEach(_unlistenTo);
  }

  function _listenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.listenTo(name);
  }

  function _unlistenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.unlistenTo(name);
  }

  function isEventEnabled(name) {
    if (events && !~events.indexOf(name)) {
      return false;
    }

    if (!mode) return true;

    if (mode) {
      if (mode === 'source' && !~SOURCE_EVENTS.indexOf(name)) {
        return false;
      }

      if (mode === 'target' && !~TARGET_EVENTS.indexOf(name)) {
        return false;
      }
    }

    return true;
  }
}
