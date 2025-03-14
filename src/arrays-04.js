/* eslint-disable no-unused-vars */
/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description: Advanced array challenges.
 *
 * Concepts:
 *  - Uses Math.abs, splice, join, and the spread operator.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**
 * Returns the sum of the absolute values of numbers in an array.
 * @param {Array<number>} nums - The array of numbers.
 * @returns {number} The sum.
 */
function getAbsoluteSum(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += Math.abs(nums[i]);
  }

  return result;
  // HINT: Use a loop and Math.abs() to add the absolute values.
}

/**
 * Creates a new array excluding any string elements.
 * @param {Array} arr - The array containing various data types.
 * @returns {Array} A new array with only non-string elements.
 */
function removeStrings(arr) {
  let newArray = [];

  newArray = arr.filter(element => typeof element !== 'string');

  return newArray;
  // HINT: Use filter() and check that typeof item is not 'string'.
}

/**
 * Finds and returns the minimum and maximum values in an array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {Array<number>} An array [min, max] or [] if empty.
 */
function findMinMax(arr) {
  let newArray = new Array();

  let min = Math.min(...arr);
  if (Number.isFinite(min)) {
    newArray.push(min);
  }

  let max = Math.max(...arr);
  if (Number.isFinite(max)) {
    newArray.push(max);
  }


  return newArray;


  // HINT: If the array is not empty, use Math.min and Math.max with spread syntax.
}

/**
 * Formats an array of 10 digits into a telephone number string.
 * Format: (123) 456-7890
 * @param {Array<number>} numbers - An array with 10 digits.
 * @returns {string} The formatted telephone number.
 */
function getTelNo(numbers) {
  if (numbers.length !== 10) {
    return 'Invalid Input: Array must contain exactly 10 elements.';
  }

  return '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6, 10).join('');

}
// HINT: Make a shallow copy, then use array methods (like splice and join) to format.


module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
};