import { describe, it, expect } from 'vitest';
import {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
  dropRight,
  dropLeft,
  checkArrayForValue,
} from '../src/arrays-03';

describe('arrays-03.js', () => {
  describe('addUpArrayElements', () => {
    it('returns the sum of all numbers in an array', () => {
      expect(addUpArrayElements([1, 2, 3, 4])).toBe(10);
    });
    it('returns 0 for an empty array', () => {
      expect(addUpArrayElements([])).toBe(0);
    });
  });

  describe('makeSquareNumbers', () => {
    it('returns an array with squared values', () => {
      expect(makeSquareNumbers([2, 3])).toEqual([4, 9]);
    });
  });

  describe('filterForLargeWords', () => {
    it('filters words longer than the given length', () => {
      expect(filterForLargeWords(['a', 'ab', 'abc', 'abcd'], 2)).toEqual(['abc', 'abcd']);
    });
    it('returns an empty array if no words match', () => {
      expect(filterForLargeWords(['a', 'bb'], 2)).toEqual([]);
    });
  });

  describe('findTheFirstEvenNumber', () => {
    it('returns the first even number in the array', () => {
      expect(findTheFirstEvenNumber([1, 3, 4, 6])).toBe(4);
    });
    it('returns undefined if no even number is found', () => {
      expect(findTheFirstEvenNumber([1, 3, 5])).toBeUndefined();
    });
  });

  describe('sortCaseSensitive', () => {
    it('returns a new sorted array without modifying the original', () => {
      const arr = ['Banana', 'apple', 'Cherry'];
      const sorted = sortCaseSensitive(arr);
      expect(sorted).toEqual(['Banana', 'Cherry', 'apple']);
      expect(arr).toEqual(['Banana', 'apple', 'Cherry']);
    });
  });

  describe('makeTheString', () => {
    it('joins array elements into a string with the given separator', () => {
      expect(makeTheString(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });
  });

  describe('reverseTheArray', () => {
    it('returns a reversed copy of the array without modifying the original', () => {
      const arr = [1, 2, 3];
      const reversed = reverseTheArray(arr);
      expect(reversed).toEqual([3, 2, 1]);
      expect(arr).toEqual([1, 2, 3]);
    });
  });

  describe('makeMirrorArray', () => {
    it('creates a mirror array for a non-empty array', () => {
      expect(makeMirrorArray([1, 2, 3])).toEqual([1, 2, 3, 2, 1]);
    });
    it('returns an empty array for an empty array', () => {
      expect(makeMirrorArray([])).toEqual([]);
    });
    it('works for an array with one element', () => {
      expect(makeMirrorArray([5])).toEqual([5]);
    });
  });

  describe('dropRight', () => {
    it('drops the last n elements', () => {
      expect(dropRight([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3]);
    });
    it('returns an empty array if n is greater than or equal to the length', () => {
      expect(dropRight([1, 2], 3)).toEqual([]);
    });
  });

  describe('dropLeft', () => {
    it('drops the first n elements', () => {
      expect(dropLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    });
    it('returns an empty array if n is greater than or equal to the length', () => {
      expect(dropLeft([1, 2], 3)).toEqual([]);
    });
  });

  describe('checkArrayForValue', () => {
    it('returns true if the array contains the value', () => {
      expect(checkArrayForValue([1, 2, 3], 2)).toBe(true);
    });
    it('returns false if the array does not contain the value', () => {
      expect(checkArrayForValue([1, 2, 3], 4)).toBe(false);
    });
  });
});
