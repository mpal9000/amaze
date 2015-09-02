/**
 * Module dependencies
 */

import hg from 'mercury';

import { TARGET_EVENTS } from './setup';

/**
 *
 */

export default hg.BaseEvent(handleDrag);

// TODO: Allow to be able to specify the events that we want
// to listent to, via `this.data`.
// If not specified listen to all `TARGET_EVENTS`
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  const data = this.data;
  const delegator = hg.Delegator();
  const _target = ev.currentTarget/* || ev.target*/;
  let listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragenter') {
    const triggerDragenter = !listenersAdded;
    addListeners();
    if (triggerDragenter) dragenter(ev);
  }

  function dragenter(e) {
    if (!isRootElementOfEvent(e)) return;

    broadcast(addData({
      type: 'dragenter',
      target: e.target,
    }));
  }

  function dragover(e) {
    if (!isRootElementOfEvent(e)) return;

    const raw = e._rawEvent;

    // Allows us to drop
    if (e.preventDefault) e.preventDefault();
    else if (raw.preventDefault) raw.preventDefault();

    raw.dataTransfer.dropEffect = 'move';

    // broadcast(addData({
    //   type: 'dragover',
    //   target: e.target,
    //   dataTransfer: raw.dataTransfer,
    // }));
    // //REF//

    return false;
  }

  function dragleave(e) {
    if (!isRootElementOfEvent(e)) return;

    removeListeners();

    broadcast(addData({
      type: 'dragleave',
      target: e.target,
    }));
  }

  function drop(e) {
    if (!isRootElementOfEvent(e)) return;

    const raw = e._rawEvent;

    // Stops the browser from redirecting
    if (e.stopPropagation) e.stopPropagation();
    else if (raw.stopPropagation) raw.stopPropagation();

    removeListeners();

    broadcast(addData({
      type: 'drop',
      target: e.target,
      dataTransfer: raw.dataTransfer,
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

    delegator.addGlobalEventListener('dragenter', dragenter);
    delegator.addGlobalEventListener('dragover', dragover);
    delegator.addGlobalEventListener('dragleave', dragleave);
    delegator.addGlobalEventListener('drop', drop);
    listenersAdded = true;
  }

  function removeListeners() {
    if (!listenersAdded) return;

    delegator.removeGlobalEventListener('dragenter', dragenter);
    delegator.removeGlobalEventListener('dragover', dragover);
    delegator.removeGlobalEventListener('dragleave', dragleave);
    delegator.removeGlobalEventListener('drop', drop);
    listenersAdded = false;
  }
}

/**
 *
 */

function isDragEvent(ev) {
  return ~TARGET_EVENTS.indexOf(ev.type);
}
