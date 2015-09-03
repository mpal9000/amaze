/**
 * Module dependencies
 */

// import 'core-js/shim.js';
// import 'babel-runtime/node_modules/core-js/shim.js';
import { app } from 'mercury';
import TimeTravel from 'mercury/time-travel';
import virtualize from 'vdom-virtualize';

import App from './app';

/**
 *
 */

export default function amaze(root, opts = {}) {
  // Get initial app state
  const state = App(Object.assign({}, opts, { undo, redo }));

  const history = TimeTravel(state);
  function undo() { return history.undo(); }
  function redo() { return history.redo(); }

  // Create a rendering cycle for the app vtree
  app(document.body, state, App.render, {
    initialTree: virtualize(root),
    target: root,
  });

  // Trigger the initial render
  state.set(state());
}
