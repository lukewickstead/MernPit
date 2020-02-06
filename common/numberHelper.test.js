import { expect } from 'chai';

import { isNumber, roundToDp } from './numberHelper';

describe('when determining if a string is a valid number', () => {
  describe('with empty string', () => {
    it('should return true', () => {
      const result = isNumber('');
      expect(result).to.equal(true);
    });
  });

  describe('with 1234567890', () => {
    it('should return true', () => {
      const result = isNumber('1234567890');
      expect(result).to.equal(true);
    });
  });

  describe('with 12345a67890', () => {
    it('should return false', () => {
      const result = isNumber('12345a67890');
      expect(result).to.equal(false);
    });
  });
});

describe('when rounding numbers', () => {
  it('can round all values correctly to 0 dp', () => {
    expect((roundToDp(4.1, 0))).to.equal(4);
    expect((roundToDp(4.4, 0))).to.equal(4);
    expect((roundToDp(4.5, 0))).to.equal(5);
    expect((roundToDp(4.6, 0))).to.equal(5);
  });

  it('can round all values correctly to 1 dp', () => {
    expect((roundToDp(4.44, 1))).to.equal(4.4);
    expect((roundToDp(4.45, 1))).to.equal(4.5);
    expect((roundToDp(4.46, 1))).to.equal(4.5);
  });

  it('can round all values correctly to 2 dp', () => {
    expect((roundToDp(0.451, 2))).to.equal(0.45);
    expect((roundToDp(0.454, 2))).to.equal(0.45);
    expect((roundToDp(0.455, 2))).to.equal(0.46);
    expect((roundToDp(0.456, 2))).to.equal(0.46);
  });
});

