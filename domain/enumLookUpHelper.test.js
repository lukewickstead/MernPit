import { expect } from 'chai';

import {
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
  MATCHES_WATCHED__OPTION__ZERO,
  MATCHES_WATCHED__OPTION__ZERO__LABEL,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
  SHIRTS_OWNED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__ZERO__LABEL,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
  YEARS_SUPPORTING__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__ZERO__LABEL,
} from '../client/src/constants/surveyConstants';
import { createGetEnumLookUpHelper } from './enumLookUpHelper';

describe('when mapping enums to display values', () => {
  const lookUpHelper = createGetEnumLookUpHelper();

  describe('with MATCHES_WATCHED__OPTION__FOUR_TO_FIVE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__FOUR_TO_FIVE);
      expect(result).to.equal(MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__ONE_TO_THREE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__ONE_TO_THREE);
      expect(result).to.equal(MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__SIX_PLUS', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__SIX_PLUS);
      expect(result).to.equal(MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__ZERO', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__ZERO);
      expect(result).to.equal(MATCHES_WATCHED__OPTION__ZERO__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__FOUR_TO_FIVE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__FOUR_TO_FIVE);
      expect(result).to.equal(SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__ONE_TO_THREE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__ONE_TO_THREE);
      expect(result).to.equal(SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__SIX_PLUS', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__SIX_PLUS);
      expect(result).to.equal(SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__ZERO', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__ZERO);
      expect(result).to.equal(SHIRTS_OWNED__OPTION__ZERO__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE);
      expect(result).to.equal(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE);
      expect(result).to.equal(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__ONE_TO_THREE', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__ONE_TO_THREE);
      expect(result).to.equal(YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__SIX_PLUS', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__SIX_PLUS);
      expect(result).to.equal(YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__ZERO', () => {
    it('should return the correct string', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__ZERO);
      expect(result).to.equal(YEARS_SUPPORTING__OPTION__ZERO__LABEL);
    });
  });

  describe('with UNKNOWN_KEY', () => {
    it('should return  UNKNOWN_KEY', () => {
      const result = lookUpHelper('UNKNOWN_KEY');
      expect(result).to.equal('UNKNOWN_KEY');
    });
  });
});
