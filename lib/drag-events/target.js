/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _setup = require('./setup');

/**
 *
 */

exports['default'] = _mercury2['default'].BaseEvent(handleDrag);

// TODO: Allow to be able to specify the events that we want
// to listent to, via `this.data`.
// If not specified listen to all `TARGET_EVENTS`
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget /* || ev.target*/;
  var listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragenter') {
    var triggerDragenter = !listenersAdded;
    addListeners();
    if (triggerDragenter) dragenter(ev);
  }

  function dragenter(e) {
    if (!isRootElementOfEvent(e)) return;

    broadcast(addData({
      type: 'dragenter',
      target: e.target
    }));
  }

  function dragover(e) {
    if (!isRootElementOfEvent(e)) return;

    var raw = e._rawEvent;

    // Allows us to drop
    if (e.preventDefault) e.preventDefault();else if (raw.preventDefault) raw.preventDefault();

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
      target: e.target
    }));
  }

  function drop(e) {
    if (!isRootElementOfEvent(e)) return;

    var raw = e._rawEvent;

    // Stops the browser from redirecting
    if (e.stopPropagation) e.stopPropagation();else if (raw.stopPropagation) raw.stopPropagation();

    removeListeners();

    broadcast(addData({
      type: 'drop',
      target: e.target,
      dataTransfer: raw.dataTransfer
    }));
  }

  function addData(additional) {
    return _Object$assign({}, data, additional);
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
  return ~_setup.TARGET_EVENTS.indexOf(ev.type);
}
module.exports = exports['default'];
//# sourceMappingURL=target.js.map