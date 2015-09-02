/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Bot;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcFilter = require('ramda/src/filter');

var _ramdaSrcFilter2 = _interopRequireDefault(_ramdaSrcFilter);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _ramdaSrcKeys = require('ramda/src/keys');

var _ramdaSrcKeys2 = _interopRequireDefault(_ramdaSrcKeys);

var _ramdaSrcPickBy = require('ramda/src/pickBy');

var _ramdaSrcPickBy2 = _interopRequireDefault(_ramdaSrcPickBy);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _util = require('../util');

var debug = (0, _debug2['default'])('amaze:bot');

/**
 *
 */

function Bot(rows, columns, isCellEnabled, spec) {
  var totalCells = rows * columns;
  var _move = (0, _ramdaSrcPartial2['default'])(move, totalCells, columns, isCellEnabled, isValidIndex);

  // TODO: Consider to not store `col` and `row`,
  // otherwise we need to update them too while "moving"
  return _mercury2['default'].struct({
    id: _mercury2['default'].value(spec.id),
    prevIndex: spec.index,
    index: _mercury2['default'].value(spec.index),
    nextIndex: spec.index,
    col: _mercury2['default'].value(spec.col),
    row: _mercury2['default'].value(spec.row),
    color: _mercury2['default'].value(spec.color),
    move: _mercury2['default'].value(_move)
  });

  function isValidIndex(totalIndexes, prevIndex, index, nextIndex) {
    debug('isValidIndex() :: --------');
    debug('isValidIndex() :: totalIndexes:', totalIndexes);
    debug('isValidIndex() :: prevIndex:', prevIndex);
    debug('isValidIndex() :: index:', index);
    debug('isValidIndex() :: nextIndex:', nextIndex);
    debug('isValidIndex() :: isBoundary(totalCells, columns, index):', isBoundary(totalCells, columns, index));
    if (nextIndex === prevIndex) {
      /*if (totalIndexes > 1
          && !isBoundary(totalCells, columns, index)) { // TODO: Fix this
        return false;
      }*/

      if (totalIndexes > 1 /*
                           && !isBoundary(totalCells, columns, index)*/) {
          // TODO: Fix this
          return false;
        }
    }

    return true;
  }
}

/**
 *
 */

// TODO: Consider to get color from uuid conversion
Bot.createIdentity = function createIdentity() {
  var id = _uuid2['default'].v4();

  // TODO: Prevent from creating duplicated colors. Consider also
  // to not create vary similar colors
  var color = (0, _util.randomRgbColor)({
    r: [0, 180],
    g: [0, 120],
    b: [0, 220]
  });

  return { id: id, color: color };
};

/**
 *
 */

function move(totalCells, columns, isCellEnabled, isValidIndex, prevIndex, index) {
  var directions = getAvailableDirections(totalCells, columns, index);

  var indexes = getAvailableIndexes(columns, index, directions);

  function filterIndexes(all) {
    var filterEnabled = (0, _ramdaSrcFilter2['default'])(isCellEnabled);

    var enabled = filterEnabled(all);

    var filterValid = (0, _ramdaSrcFilter2['default'])((0, _ramdaSrcPartial2['default'])(isValidIndex, enabled.length, prevIndex, index));

    return filterValid(enabled);
  }

  var validIndexes = filterIndexes(indexes);

  var nextIndex = pickRandomIndex(validIndexes);

  return nextIndex !== null ? nextIndex : index;
};

/**
 *
 */

function getAvailableDirections(totalCells, columns, index) {
  var validDirections = pickValidDirections({
    u: !isTopBoundary(totalCells, columns, index),
    r: !isRightBoundary(totalCells, columns, index),
    d: !isBottomBoundary(totalCells, columns, index),
    l: !isLeftBoundary(totalCells, columns, index)
  });

  return (0, _ramdaSrcKeys2['default'])(validDirections);
}

/**
 *
 */

var isValidDirection = function isValidDirection(val) {
  return val === true;
};
var pickValidDirections = (0, _ramdaSrcPickBy2['default'])(isValidDirection);

/**
 *
 */

function getAvailableIndexes(columns, index, directions) {
  var indexByDirection = (0, _ramdaSrcPartial2['default'])(getIndexByDirection, columns, index);
  return (0, _ramdaSrcMap2['default'])(indexByDirection, directions);
}

/**
 *
 */

function getIndexByDirection(columns, index, direction) {
  switch (direction) {
    case 'u':
      return moveUp(columns, index);
    case 'r':
      return moveRight(columns, index);
    case 'd':
      return moveDown(columns, index);
    case 'l':
      return moveLeft(columns, index);
    // no default
  }
}

/**
 *
 */

function pickRandomIndex(indexes) {
  var totalIndexes = indexes.length;
  return totalIndexes ? indexes[(0, _util.randomIntFromRange)(0, totalIndexes - 1)] : null;
}

/**
 *
 */

function moveUp(columns, index) {
  return index - columns;
}

/**
 *
 */

function moveRight(columns, index) {
  return index + 1;
}

/**
 *
 */

function moveDown(columns, index) {
  return index + columns;
}

/**
 *
 */

function moveLeft(columns, index) {
  return index - 1;
}

/**
 *
 */

function isBoundary(totalCells, columns, index) {
  return isTopBoundary(totalCells, columns, index) || isRightBoundary(totalCells, columns, index) || isBottomBoundary(totalCells, columns, index) || isLeftBoundary(totalCells, columns, index);
}

/**
 *
 */

function isTopBoundary(totalCells, columns, index) {
  return index < columns;
}

/**
 *
 */

function isRightBoundary(totalCells, columns, index) {
  return index == columns - 1 || (index + 1) % columns == 0;
}

/**
 *
 */

function isBottomBoundary(totalCells, columns, index) {
  return index >= totalCells - columns;
}

/**
 *
 */

function isLeftBoundary(totalCells, columns, index) {
  return index == 0 || index == columns || index % columns == 0;
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map