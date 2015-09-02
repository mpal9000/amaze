/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Grid;

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _ramdaSrcGroupBy = require('ramda/src/groupBy');

var _ramdaSrcGroupBy2 = _interopRequireDefault(_ramdaSrcGroupBy);

var _ramdaSrcProp = require('ramda/src/prop');

var _ramdaSrcProp2 = _interopRequireDefault(_ramdaSrcProp);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _cells = require('./cells');

var _cells2 = _interopRequireDefault(_cells);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Grid() {
  return null;
}

/**
 * Render component.
 */

var cellsProps = memoize(function (columns, margin, cells, bots, checkReadyState, isStarted) {
  var botsByIndex = (0, _ramdaSrcGroupBy2['default'])((0, _ramdaSrcProp2['default'])('index'), (0, _ramdaSrcValues2['default'])(bots));
  return { columns: columns, margin: margin, cells: cells, botsByIndex: botsByIndex, checkReadyState: checkReadyState, isStarted: isStarted };
});

Grid.render = function render(props) {
  return (0, _mercury.h)('section.amaze-Grid', (0, _mercury.h)('.amaze-Grid-background', _mercury2['default'].partial(_cells2['default'].render, cellsProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted'], props))))));
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map