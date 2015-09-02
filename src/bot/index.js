/**
 * Module dependencies
 */

import uuid from 'uuid';
import map from 'ramda/src/map';
import filter from 'ramda/src/filter';
import partial from 'ramda/src/partial';
import keys from 'ramda/src/keys';
import pickBy from 'ramda/src/pickBy';
import hg from 'mercury';
import dbg from 'debug';

import { randomIntFromRange, randomRgbColor } from '../util';

const debug = dbg('amaze:bot');

/**
 *
 */

export default function Bot(rows, columns, isCellEnabled, spec) {
  const totalCells = rows * columns;
  const _move = partial(
    move, totalCells, columns, isCellEnabled, isValidIndex
  );

  // TODO: Consider to not store `col` and `row`,
  // otherwise we need to update them too while "moving"
  return hg.struct({
    id: hg.value(spec.id),
    prevIndex: spec.index,
    index: hg.value(spec.index),
    nextIndex: spec.index,
    col: hg.value(spec.col),
    row: hg.value(spec.row),
    color: hg.value(spec.color),
    move: hg.value(_move),
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

      if (totalIndexes > 1/*
          && !isBoundary(totalCells, columns, index)*/) { // TODO: Fix this
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
  const id = uuid.v4();

  // TODO: Prevent from creating duplicated colors. Consider also
  // to not create vary similar colors
  const color = randomRgbColor({
    r: [0, 180],
    g: [0, 120],
    b: [0, 220],
  });

  return { id, color };
}

/**
 *
 */

function move(totalCells, columns, isCellEnabled, isValidIndex, prevIndex, index) {
  const directions = getAvailableDirections(totalCells, columns, index);

  const indexes = getAvailableIndexes(columns, index, directions);

  function filterIndexes(all) {
    const filterEnabled = filter(isCellEnabled);

    const enabled = filterEnabled(all);

    const filterValid = filter(
      partial(isValidIndex, enabled.length, prevIndex, index)
    );

    return filterValid(enabled);
  }

  const validIndexes = filterIndexes(indexes);

  const nextIndex = pickRandomIndex(validIndexes);

  return nextIndex !== null ? nextIndex : index;
};

/**
 *
 */

function getAvailableDirections(totalCells, columns, index) {
  const validDirections = pickValidDirections({
    u: !isTopBoundary(totalCells, columns, index),
    r: !isRightBoundary(totalCells, columns, index),
    d: !isBottomBoundary(totalCells, columns, index),
    l: !isLeftBoundary(totalCells, columns, index),
  });

  return keys(validDirections);
}

/**
 *
 */

const isValidDirection = val => val === true;
const pickValidDirections = pickBy(isValidDirection);

/**
 *
 */

function getAvailableIndexes(columns, index, directions) {
  const indexByDirection = partial(getIndexByDirection, columns, index);
  return map(indexByDirection, directions);
}

/**
 *
 */

function getIndexByDirection(columns, index, direction) {
  switch (direction) {
    case 'u': return moveUp(columns, index);
    case 'r': return moveRight(columns, index);
    case 'd': return moveDown(columns, index);
    case 'l': return moveLeft(columns, index);
    // no default
  }
}

/**
 *
 */

function pickRandomIndex(indexes) {
  const totalIndexes = indexes.length;
  return totalIndexes
    ? indexes[randomIntFromRange(0, totalIndexes - 1)]
    : null;
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
  return isTopBoundary(totalCells, columns, index)
    || isRightBoundary(totalCells, columns, index)
    || isBottomBoundary(totalCells, columns, index)
    || isLeftBoundary(totalCells, columns, index);
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
  return index == columns - 1
    || (index + 1) % columns == 0;
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
  return index == 0
    || index == columns
    || index % columns == 0;
}
