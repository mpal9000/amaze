/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Results;

var _durationJs = require('duration-js');

var _durationJs2 = _interopRequireDefault(_durationJs);

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcAddIndex = require('ramda/src/addIndex');

var _ramdaSrcAddIndex2 = _interopRequireDefault(_ramdaSrcAddIndex);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _scrollable = require('../scrollable');

var _scrollable2 = _interopRequireDefault(_scrollable);

var mapIndexed = (0, _ramdaSrcAddIndex2['default'])(_ramdaSrcMap2['default']);

/**
 * Component
 */

function Results() {
  return null;
}

/**
 *
 */

function getResults(props) {
  return props.winners.map(function (winner) {
    var bot = props.bots[winner.id];
    return {
      id: bot.id,
      color: bot.color,
      time: winner.time
    };
  });
}

/**
 * Render component.
 */

Results.render = function render(props) {
  var results = getResults(props);

  return (0, _mercury.h)('section.amaze-Results', new _scrollable2['default'](_mercury2['default'].partial(renderContent, results), {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }));
};

/**
 *
 */

function renderContent(results) {
  return (0, _mercury.h)('.amaze-Results-content', [(0, _mercury.h)('h1', 'Results'), _mercury2['default'].partial(renderTable, results)]);
}

/**
 *
 */

function renderTable(results) {
  return (0, _mercury.h)('table.amaze-Results-table', [_mercury2['default'].partial(renderHeaders, ['Place', 'Bot', 'Time'])].concat(_toConsumableArray(mapIndexed((0, _ramdaSrcPartial2['default'])(_mercury2['default'].partial, renderRow), results))));
}

/**
 *
 */

function renderHeaders(texts) {
  return (0, _mercury.h)('tr', (0, _ramdaSrcMap2['default'])(renderHeader, texts));
}

/**
 *
 */

function renderHeader(text) {
  return (0, _mercury.h)('th', (0, _mercury.h)('span', text));
}

/**
 *
 */

function renderRow(result, index) {
  return (0, _mercury.h)('tr', [(0, _mercury.h)('td', '' + (index + 1)), (0, _mercury.h)('td', _mercury2['default'].partial(renderBot, result)), (0, _mercury.h)('td', '' + new _durationJs2['default'](result.time).toString())]);
}

/**
 *
 */

function renderBot(result) {
  var color = 'rgb(' + result.color.join() + ')';

  return (0, _mercury.h)('.amaze-Results-botWrapper', (0, _mercury.h)('.amaze-Results-bot', {
    style: { 'background-color': color }
  }));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map