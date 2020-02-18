import {
  EXISTING_SUPPORTER__NO,
  EXISTING_SUPPORTER__NO__DISPLAY,
  EXISTING_SUPPORTER__YES,
  EXISTING_SUPPORTER__YES__DISPLAY,
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
    it('should return MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__FOUR_TO_FIVE);
      expect(result).toEqual(MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__ONE_TO_THREE', () => {
    it('should return MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__ONE_TO_THREE);
      expect(result).toEqual(MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__SIX_PLUS', () => {
    it('should return MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__SIX_PLUS);
      expect(result).toEqual(MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with MATCHES_WATCHED__OPTION__ZERO', () => {
    it('should return MATCHES_WATCHED__OPTION__ZERO__LABEL', () => {
      const result = lookUpHelper(MATCHES_WATCHED__OPTION__ZERO);
      expect(result).toEqual(MATCHES_WATCHED__OPTION__ZERO__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__FOUR_TO_FIVE', () => {
    it('should return SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__FOUR_TO_FIVE);
      expect(result).toEqual(SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__ONE_TO_THREE', () => {
    it('should return the SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__ONE_TO_THREE);
      expect(result).toEqual(SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__SIX_PLUS', () => {
    it('should return SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__SIX_PLUS);
      expect(result).toEqual(SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with SHIRTS_OWNED__OPTION__ZERO', () => {
    it('should return SHIRTS_OWNED__OPTION__ZERO__LABEL', () => {
      const result = lookUpHelper(SHIRTS_OWNED__OPTION__ZERO);
      expect(result).toEqual(SHIRTS_OWNED__OPTION__ZERO__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE', () => {
    it('should return YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE);
      expect(result).toEqual(YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__ONE_TO_THREE', () => {
    it('should return YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__ONE_TO_THREE);
      expect(result).toEqual(YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__SIX_PLUS', () => {
    it('should return YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__SIX_PLUS);
      expect(result).toEqual(YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL);
    });
  });

  describe('with YEARS_SUPPORTING__OPTION__ZERO', () => {
    it('should return YEARS_SUPPORTING__OPTION__ZERO__LABEL', () => {
      const result = lookUpHelper(YEARS_SUPPORTING__OPTION__ZERO);
      expect(result).toEqual(YEARS_SUPPORTING__OPTION__ZERO__LABEL);
    });
  });

  describe('with EXISTING_SUPPORTER__NO', () => {
    it('should return EXISTING_SUPPORTER__NO__DISPLAY', () => {
      const result = lookUpHelper(EXISTING_SUPPORTER__NO);
      expect(result).toEqual(EXISTING_SUPPORTER__NO__DISPLAY);
    });
  });

  describe('with EXISTING_SUPPORTER__YES', () => {
    it('should return EXISTING_SUPPORTER__YES__DISPLAY', () => {
      const result = lookUpHelper(EXISTING_SUPPORTER__YES);
      expect(result).toEqual(EXISTING_SUPPORTER__YES__DISPLAY);
    });
  });

  describe('with UNKNOWN_KEY', () => {
    it('should return  UNKNOWN_KEY', () => {
      const result = lookUpHelper('UNKNOWN_KEY');
      expect(result).toEqual('UNKNOWN_KEY');
    });
  });
});
