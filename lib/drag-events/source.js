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

// TODO: Handle also "drag" event. First need to be able to specify
// the events that we want to listent to, via `this.data`.
// // If not specified listen to all `SOURCE_EVENTS`
// TODO: Consider to move some functions to the outer scope
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget;
  var listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragstart') {
    var triggerDragstart = !listenersAdded;
    addListeners();
    if (triggerDragstart) dragstart(ev);
  }

  // TODO: Check if can remove `target` from broadcasted data,
  // from all/some handlers
  function dragstart(e) {
    if (!isRootElementOfEvent(e)) return;

    var dataTransfer = e._rawEvent.dataTransfer;
    dataTransfer.effectAllowed = 'move';

    broadcast(addData({
      type: 'dragstart',
      target: e.target,
      dataTransfer: dataTransfer
    }));
  }

  function dragend(e) {
    if (!isRootElementOfEvent(e)) return;

    removeListeners();

    broadcast(addData({
      type: 'dragend',
      target: e.target
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
  return ~_setup.SOURCE_EVENTS.indexOf(ev.type);
}
module.exports = exports['default'];
//# sourceMappingURL=source.js.map