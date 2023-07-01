"use strict";

var _helper = require("../helper");
jest.mock('react-i18next', () => ({
  getI18n: () => ({
    language: 'en-GB'
  })
}));
describe('helper', () => {
  describe('filterRecords', () => {
    it('should filter out undefined, empty, and NaN values', () => {
      const inputObj = {
        a: 'Hello',
        b: undefined,
        d: '',
        e: NaN,
        f: 123,
        g: true
      };
      const expectedOutput = {
        a: 'Hello',
        f: 123,
        g: true
      };
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an empty input object', () => {
      const inputObj = {};
      const expectedOutput = {};
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an input object with only undefined values', () => {
      const inputObj = {
        a: undefined,
        b: undefined,
        c: undefined
      };
      const expectedOutput = {};
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an input object with only empty string values', () => {
      const inputObj = {
        a: '',
        b: '',
        c: ''
      };
      const expectedOutput = {};
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an input object with only NaN values', () => {
      const inputObj = {
        a: NaN,
        b: NaN,
        c: NaN
      };
      const expectedOutput = {};
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an input object with mixed values', () => {
      const inputObj = {
        a: 'Hello',
        b: undefined,
        d: '',
        e: NaN,
        f: 123,
        g: true
      };
      const expectedOutput = {
        a: 'Hello',
        f: 123,
        g: true
      };
      const filteredObj = (0, _helper.filterRecords)(inputObj);
      expect(filteredObj).toEqual(expectedOutput);
    });
    it('should handle an undefined input', () => {
      const filteredObj = (0, _helper.filterRecords)(undefined);
      expect(filteredObj).toEqual(undefined);
    });
  });
  describe('capitalizeString', () => {
    test('should capitalize the first letter of a string', () => {
      const result = (0, _helper.capitaliseString)('hello');
      expect(result).toBe('Hello');
    });
    test('should return an empty string if input is empty', () => {
      const result = (0, _helper.capitaliseString)('');
      expect(result).toBe('');
    });
    test('should return the same string if first letter is already capitalized', () => {
      const result = (0, _helper.capitaliseString)('Hello');
      expect(result).toBe('Hello');
    });
    test('should return the same string if input is a single character', () => {
      const result = (0, _helper.capitaliseString)('a');
      expect(result).toBe('A');
    });
  });
  describe('convertToMoneyString', () => {
    afterEach(jest.restoreAllMocks);
    test('should convert a positive number to a comma-separated money string', () => {
      expect((0, _helper.convertToMoneyString)(1234.56)).toEqual('1,234.56');
      expect((0, _helper.convertToMoneyString)(56789.01)).toEqual('56,789.01');
      expect((0, _helper.convertToMoneyString)(987654.32)).toEqual('987,654.32');
    });
    test('should convert a negative number to a comma-separated money string', () => {
      expect((0, _helper.convertToMoneyString)(-1234.56)).toEqual('-1,234.56');
      expect((0, _helper.convertToMoneyString)(-56789.01)).toEqual('-56,789.01');
      expect((0, _helper.convertToMoneyString)(-987654.32)).toEqual('-987,654.32');
    });
    test('should handle numbers with only decimal part', () => {
      expect((0, _helper.convertToMoneyString)(0.99)).toEqual('0.99');
      expect((0, _helper.convertToMoneyString)(-0.01)).toEqual('-0.01');
    });
    test('should handle numbers with multiple commas', () => {
      expect((0, _helper.convertToMoneyString)(1234567.89)).toEqual('1,234,567.89');
      expect((0, _helper.convertToMoneyString)(-9876543.21)).toEqual('-9,876,543.21');
    });
    test('should return "NaN" for invalid input', () => {
      expect((0, _helper.convertToMoneyString)(NaN)).toEqual(undefined);
    });
  });
  describe('roundToNearestNumber', () => {
    test.each([[0.5, 1, 1], [0, 0.25, 0], [1, 0.25, 1], [3.14, 1, 3], [3.14, 0.1, 3.1], [3.14159, 0.01, 3.14], [150320, 100, 150300], [674382, 100, 674400]])('Rounds to the nearest number correctly when value is %f and roundTo is %f', (value, roundTo, expected) => {
      expect((0, _helper.roundToNearestNumber)(value, roundTo)).toEqual(expected);
    });
  });
});