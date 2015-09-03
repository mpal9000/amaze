/**
 * Module dependencies
 */

// import 'core-js/shim.js';
// import 'babel-runtime/node_modules/core-js/shim.js';
'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = amaze;

var _mercury = require('mercury');

var _mercuryTimeTravel = require('mercury/time-travel');

var _mercuryTimeTravel2 = _interopRequireDefault(_mercuryTimeTravel);

var _vdomVirtualize = require('vdom-virtualize');

var _vdomVirtualize2 = _interopRequireDefault(_vdomVirtualize);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

/**
 *
 */

function amaze(root) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // Get initial app state
  var state = (0, _app2['default'])(_Object$assign({}, opts, { undo: undo, redo: redo }));

  var history = (0, _mercuryTimeTravel2['default'])(state);
  function undo() {
    return history.undo();
  }
  function redo() {
    return history.redo();
  }

  // Create a rendering cycle for the app vtree
  (0, _mercury.app)(document.body, state, _app2['default'].render, {
    initialTree: (0, _vdomVirtualize2['default'])(root),
    target: root
  });

  // Trigger the initial render
  state.set(state());
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map