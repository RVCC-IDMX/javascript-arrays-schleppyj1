import { describe, it, expect } from 'vitest';
import {
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
} from '../src/arrays-01';

describe('arrays-01.js', () => {
  describe('getFirstValue', () => {
    it('returns the first element of a non-empty array', () => {
      expect(getFirstValue([10, 20, 30])).toBe(10);
    });
    it('returns undefined for an empty array', () => {
      expect(getFirstValue([])).toBeUndefined();
    });
  });

  describe('makeArray', () => {
    it('returns an array composed of the provided values', () => {
      expect(makeArray(1, 'a', true, null)).toEqual([1, 'a', true, null]);
    });
  });

  describe('createFirstFivePrimes', () => {
    it('returns [2,3,5,7,11]', () => {
      expect(createFirstFivePrimes()).toEqual([2, 3, 5, 7, 11]);
    });
  });

  describe('createSizedArray', () => {
    it('creates an array of sequential numbers of given size', () => {
      expect(createSizedArray(5)).toEqual([0, 1, 2, 3, 4]);
    });
    it('returns an empty array when size is 0', () => {
      expect(createSizedArray(0)).toEqual([]);
    });
  });

  describe('modifyArrayByAdding', () => {
    it('adds 1 to the beginning and end of the array without modifying the original', () => {
      const arr = [2, 3, 4];
      const result = modifyArrayByAdding(arr);
      expect(result).toEqual([1, 2, 3, 4, 1]);
      expect(arr).toEqual([2, 3, 4]); // original unchanged
    });
  });

  describe('modifyArrayByDeleting', () => {
    it('removes the first and last elements of the array', () => {
      expect(modifyArrayByDeleting([1, 2, 3, 4])).toEqual([2, 3]);
    });
    it('returns an empty array if original array has fewer than 2 elements', () => {
      expect(modifyArrayByDeleting([1])).toEqual([]);
      expect(modifyArrayByDeleting([])).toEqual([]);
    });
  });

  describe('findElementAtIndex', () => {
    it('returns the element at the given index', () => {
      expect(findElementAtIndex(['a', 'b', 'c'], 1)).toBe('b');
    });
    it('returns undefined for an out-of-bound index', () => {
      expect(findElementAtIndex(['a'], 5)).toBeUndefined();
    });
  });

  describe('findElementByValue', () => {
    it('returns the index of the first occurrence of a value', () => {
      expect(findElementByValue([10, 20, 30, 20], 20)).toBe(1);
    });
    it('returns -1 if the value is not found', () => {
      expect(findElementByValue([10, 20, 30], 40)).toBe(-1);
    });
  });

  describe('changeElementAtIndex', () => {
    it('replaces the element at the specified index', () => {
      const arr = [1, 2, 3];
      changeElementAtIndex(arr, 1, 'changed');
      expect(arr).toEqual([1, 'changed', 3]);
    });
  });

  describe('makeStringFromArray', () => {
    it('joins array elements into a string without separator', () => {
      expect(makeStringFromArray(['a', 'b', 'c'])).toBe('abc');
    });
  });

  describe('createShallowCopy', () => {
    it('creates a shallow copy of an array', () => {
      const original = [1, 2, 3];
      const copy = createShallowCopy(original);
      expect(copy).toEqual(original);
      expect(copy).not.toBe(original); // different reference
    });
  });
});
