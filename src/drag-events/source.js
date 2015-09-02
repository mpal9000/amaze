/**
 * Module dependencies
 */

import hg from 'mercury';

import { SOURCE_EVENTS } from './setup';

/**
 *
 */

export default hg.BaseEvent(handleDrag);

// TODO: Handle also "drag" event. First need to be able to specify
// the events that we want to listent to, via `this.data`.
// // If not specified listen to all `SOURCE_EVENTS`
// TODO: Consider to move some functions to the outer scope
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  const data = this.data;
  const delegator = hg.Delegator();
  const _target = ev.currentTarget;
  let listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragstart') {
    const triggerDragstart = !listenersAdded;
    addListeners();
    if (triggerDragstart) dragstart(ev);
  }

  // TODO: Check if can remove `target` from broadcasted data,
  // from all/some handlers
  function dragstart(e) {
    if (!isRootElementOfEvent(e)) return;

    const dataTransfer = e._rawEvent.dataTransfer;
    dataTransfer.effectAllowed = 'move';

    broadcast(addData({
      type: 'dragstart',
      target: e.target,
      dataTransfer,
    }));
  }

  function dragend(e) {
    if (!isRootElementOfEvent(e)) return;

    removeListeners();

    broadcast(addData({
      type: 'dragend',
      target: e.target,
    }));
  }

  function addData(additional) {
    return Object.assign({}, data, additional);
  }

  function isRootElementOfEvent(e) {
    return e.target === _target;
  }

  function addListeners() {
    if (listenersAdded) return;

    delegator.addGlobalEventListener('dragstart', dragstart);
    delegator.addGlobalEventListener('dragend', dragend);
    listenersAdded = true;
  }

  function removeListeners() {
    if (!listenersAdded) return;

    delegator.removeGlobalEventListener('dragstart', dragstart);
    delegator.removeGlobalEventListener('dragend', dragend);
    listenersAdded = false;
  }
}

/**
 *
 */

function isDragEvent(ev) {
  return ~SOURCE_EVENTS.indexOf(ev.type);
}
