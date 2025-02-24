/* eslint-disable no-unused-vars */
/*
 * arrays-01.js
 * Language: javascript
 * Test: tests/arrays-01.test.js
 * Path: src/arrays-01.js
 *
 * Description: Basic array operations.
 *
 * Concepts:
 *  - Arrays are zero-indexed, mutable, and iterable.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Returns the first element of an array.
 * @param {Array} arr - The array.
 * @returns {*} The first element.
 */
function getFirstValue(arr) {
  return arr[0];
}

/**
 * Returns an array composed of the four provided values.
 * @param {*} a - First element.
 * @param {*} b - Second element.
 * @param {*} c - Third element.
 * @param {*} d - Fourth element.
 * @returns {Array} An array with the four elements.
 */
function makeArray(a, b, c, d) {
  let Array = [a, b, c, d];
  return Array;
}

/**
 * Creates a new array of the first five prime numbers.
 * @returns {Array<number>} [2, 3, 5, 7, 11]
 */
function createFirstFivePrimes() {
  let newArray = [2, 3, 5, 7, 11];
  return newArray;
}

/**
 * Creates an array of sequential numbers from 0 up to size - 1.
 * @param {number} size - The size of the array.
 * @returns {Array<number>} The new array.
 */
function createSizedArray(size) {
  let newArray = new Array(size);

  for (let i = 0; i < size; i++) {
    newArray[i] = i;
  }
  return newArray;
  // HINT: Use a for loop and push numbers from 0 to size - 1 into an array.
}

/**
 * Modifies an array by adding the number 1 at both the beginning and the end.
 * Works on a shallow copy.
 * @param {Array} arr - The original array.
 * @returns {Array} The modified array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function modifyArrayByAdding(arr) {
  let shallowCopy = [...arr];
  shallowCopy.unshift(1);
  shallowCopy.push(1);
  return shallowCopy;
  // HINT: Create a shallow copy and then use unshift() and push().
}

/**
 * Modifies an array by removing the first and last elements.
 * Works on a shallow copy.
 * @param {Array} arr - The array to modify.
 * @returns {Array} The modified array.
 */
function modifyArrayByDeleting(arr) {
  let shallowCopy = [...arr];
  shallowCopy.shift();
  shallowCopy.pop();
  return shallowCopy;
  // HINT: Create a shallow copy and use shift() and pop() if the array is not empty.
}

/**
 * Returns the element at a specified index.
 * @param {Array} arr - The array.
 * @param {number} index - The index.
 * @returns {*} The element at the given index.
 */
function findElementAtIndex(arr, index) {
  return arr[index];
}

/**
 * Finds the index of the first occurrence of a given value.
 * Returns -1 if not found.
 * @param {Array} arr - The array.
 * @param {*} value - The value to find.
 * @returns {number} The index or -1 if not found.
 */
function findElementByValue(arr, value) {
  return arr.indexOf(value);
}

/**
 * Replaces the element at a specific index with a new value.
 * Note: This function modifies the original array.
 * @param {Array} arr - The array.
 * @param {number} index - The index to modify.
 * @param {*} value - The new value.
 * @returns {Array} The modified array.
 */
function changeElementAtIndex(arr, index, value) {
  arr[index] = value;
  return arr;

}

/**
 * Joins all elements of an array into a string without any separator.
 * @param {Array} arr - The array of elements.
 * @returns {string} The joined string.
 */
function makeStringFromArray(arr) {
  var result;

  result = arr.join('');

  return result;
}

/**
 * Creates a shallow copy of an array using the spread operator.
 * @param {Array} arr - The array.
 * @returns {Array} A new array with the same elements.
 */
function createShallowCopy(arr) {
  let shallowCopy = [...arr];

  return shallowCopy;

}

module.exports = {
  getFirstValue,
  makeArray,
  createFirstFivePrimes,
  createSizedArray,
  modifyArrayByAdding,
  modifyArrayByDeleting,
  findElementAtIndex,
  findElementByValue,
  changeElementAtIndex,
  makeStringFromArray,
  createShallowCopy,
};