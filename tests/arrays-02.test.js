import { describe, it, expect } from 'vitest';
import {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
  makeWordTitleCase,
  replaceTheString,
  makeSentenceTitleCase,
} from '../src/arrays-02';

describe('arrays-02.js', () => {
  describe('findTheCharacterAtIndex', () => {
    it('returns the character at a valid index', () => {
      expect(findTheCharacterAtIndex('hello', 1)).toBe('e');
    });
    it('returns an empty string for an out-of-bound index', () => {
      expect(findTheCharacterAtIndex('hello', 10)).toBe('');
    });
  });

  describe('sliceTheString', () => {
    it('returns the correct slice of the string', () => {
      expect(sliceTheString('abcdef', 1, 4)).toBe('bcd');
    });
  });

  describe('splitTheString', () => {
    it('splits the string by the given separator', () => {
      expect(splitTheString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('makeAllUpperCase', () => {
    it('converts the string to uppercase', () => {
      expect(makeAllUpperCase('hello')).toBe('HELLO');
    });
  });

  describe('makeAllLowerCase', () => {
    it('converts the string to lowercase', () => {
      expect(makeAllLowerCase('HELLO')).toBe('hello');
    });
  });

  describe('makeWordTitleCase', () => {
    it('converts a single word to title case', () => {
      expect(makeWordTitleCase('jAvAsCript')).toBe('Javascript');
    });
    it('returns an empty string if the word is empty', () => {
      expect(makeWordTitleCase('')).toBe('');
    });
  });

  describe('replaceTheString', () => {
    it('replaces all occurrences of a substring', () => {
      expect(replaceTheString('foo bar foo', 'foo', 'baz')).toBe('baz bar baz');
    });
  });

  describe('makeSentenceTitleCase', () => {
    it('converts each word in a sentence to title case', () => {
      expect(makeSentenceTitleCase('hello world')).toBe('Hello World');
    });
    it('handles extra spaces correctly', () => {
      // Note: extra spaces will be preserved.
      expect(makeSentenceTitleCase('  hello  world  ')).toBe('  Hello  World  ');
    });
  });
});
