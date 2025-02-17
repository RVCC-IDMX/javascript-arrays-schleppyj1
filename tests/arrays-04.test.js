import { describe, it, expect } from 'vitest';
import {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
} from '../src/arrays-04';

describe('arrays-04.js', () => {
  describe('getAbsoluteSum', () => {
    it('returns the sum of absolute values', () => {
      expect(getAbsoluteSum([-1, 2, -3])).toBe(6);
    });
    it('returns 0 for an empty array', () => {
      expect(getAbsoluteSum([])).toBe(0);
    });
  });

  describe('removeStrings', () => {
    it('removes string elements from the array', () => {
      expect(removeStrings([1, 'a', 2, 'b'])).toEqual([1, 2]);
    });
    it('returns the original array if there are no strings', () => {
      expect(removeStrings([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('findMinMax', () => {
    it('returns the minimum and maximum values in the array', () => {
      expect(findMinMax([3, 1, 4, 2])).toEqual([1, 4]);
    });
    it('returns an empty array for an empty input', () => {
      expect(findMinMax([])).toEqual([]);
    });
  });

  describe('getTelNo', () => {
    it('formats an array of 10 digits into a telephone number string', () => {
      expect(getTelNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
    });
  });
});
