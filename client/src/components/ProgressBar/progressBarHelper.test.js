import { expect } from 'chai';

import progressBarHelper from './progressBarHelper';

import {
  URL__EXISTING_SUPPORTER,
  URL__NAME,
  URL__PHONE_NUMBERS,
  URL__EMAIL,
  URL__SUPPORTER_EXPERIENCE,
  URL__SUMMARY,
} from '../../constants/urlConstants';

describe('when working out the users progress', () => {
  describe('with the /ExistingSupporter', () => {
    it('should return the percentage as 0%', () => {
      const result = progressBarHelper(URL__EXISTING_SUPPORTER);
      expect(result).to.deep.equal({ percent: 0 });
    });
  });

  describe('with the /Name', () => {
    it('should return the percentage as 20%', () => {
      const result = progressBarHelper(URL__NAME);
      expect(result).to.deep.equal({ percent: 20 });
    });
  });

  describe('with the /Phone', () => {
    it('should return the percentage as 40%', () => {
      const result = progressBarHelper(URL__PHONE_NUMBERS);
      expect(result).to.deep.equal({ percent: 40 });
    });
  });

  describe('with the /Email', () => {
    it('should return the percentage as 60%', () => {
      const result = progressBarHelper(URL__EMAIL);
      expect(result).to.deep.equal({ percent: 60 });
    });
  });

  describe('with the /Experience', () => {
    it('should return the percentage as 80%', () => {
      const result = progressBarHelper(URL__SUPPORTER_EXPERIENCE);
      expect(result).to.deep.equal({ percent: 80 });
    });
  });

  describe('with the /Summary', () => {
    it('should return the percentage as 100%', () => {
      const result = progressBarHelper(URL__SUMMARY);
      expect(result).to.deep.equal({ percent: 100 });
    });
  });

  describe('with the /UnknownUrl', () => {
    it('should return the percentage as -1', () => {
      const result = progressBarHelper('/UnknownUrl');
      expect(result).to.deep.equal({ percent: -1 });
    });
  });
});