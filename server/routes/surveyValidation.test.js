import surveyValidationSchema from './surveyValidation';

import {
  EXISTING_SUPPORTER__NO,
  EXISTING_SUPPORTER__YES,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
} from '../../client/src/constants/surveyConstants';

describe('when validating applicantSchemaValidation', () => {
  const STUBBED_EMAIL_ADDRESS = 'fo@foo.com';

  describe('with an invalid entity', () => {
    describe('of an empty object', () => {
      it('should report all required fields as invalid', () => {
        const result = surveyValidationSchema.validate({}, { abortEarly: false });
        const expectedResult = [
          '"firstName" is required',
          '"lastName" is required',
          '"mobilePhoneNumber" is required',
          '"officePhoneNumber" is required',
          '"email" is required',
          '"matchesWatched" is required',
          '"shirtsOwned" is required',
          '"yearsSupporting" is required',
          '"isExistingSupporter" is required'];

        const errorMsgs = result.error.details.map((x) => x.message);
        expect(errorMsgs).toEqual(expectedResult);
      });
    });

    describe('of minimum invalid object', () => {
      it('should report all minimum fields as invalid', () => {
        const stubbedSurvey = {
          email: '',
          firstName: '',
          isExistingSupporter: '',
          lastName: '',
          matchesWatched: '',
          mobilePhoneNumber: '0787878787',
          officePhoneNumber: '078787878',
          shirtsOwned: '',
          yearsSupporting: '',
        };

        const expectedResult = [
          '"firstName" is not allowed to be empty',
          '"lastName" is not allowed to be empty',
          '"mobilePhoneNumber" length must be at least 11 characters long',
          '"mobilePhoneNumber" with value "0787878787" fails to match the required pattern: /^07[0-9]{9}$/',
          '"officePhoneNumber" length must be at least 10 characters long',
          '"officePhoneNumber" with value "078787878" fails to match the required pattern: /^0[1|2][0-9]{8,9}$|^07[0-9]{9}$/',
          '"email" is not allowed to be empty',
          '"matchesWatched" must be one of [MATCHES_WATCHED__OPTION__FOUR_TO_FIVE, MATCHES_WATCHED__OPTION__ONE_TO_THREE, MATCHES_WATCHED__OPTION__SIX_PLUS, MATCHES_WATCHED__OPTION__ZERO]',
          '"matchesWatched" is not allowed to be empty',
          '"shirtsOwned" must be one of [SHIRTS_OWNED__OPTION__FOUR_TO_FIVE, SHIRTS_OWNED__OPTION__ONE_TO_THREE, SHIRTS_OWNED__OPTION__SIX_PLUS, SHIRTS_OWNED__OPTION__ZERO]',
          '"shirtsOwned" is not allowed to be empty',
          '"yearsSupporting" must be one of [YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE, YEARS_SUPPORTING__OPTION__ONE_TO_THREE, YEARS_SUPPORTING__OPTION__SIX_PLUS, YEARS_SUPPORTING__OPTION__ZERO]',
          '"yearsSupporting" is not allowed to be empty',
          '"isExistingSupporter" must be one of [EXISTING_SUPPORTER__YES, EXISTING_SUPPORTER__NO]',
          '"isExistingSupporter" is not allowed to be empty',
        ];

        const result = surveyValidationSchema.validate(stubbedSurvey, { abortEarly: false });
        const errorMsgs = result.error.details.map((x) => x.message);
        expect(errorMsgs).toEqual(expectedResult);
      });
    });

    describe('of maximum invalid object', () => {
      it('should report all maximum fields as invalid', () => {
        const stubbedSurvey = {
          firstName: '1'.repeat(36),
          lastName: '1'.repeat(36),
          mobilePhoneNumber: '078787878700',
          officePhoneNumber: '078787878000',
          email: 'foo@foo',
          isExistingSupporter: '',
          matchesWatched: '',
          shirtsOwned: '',
          yearsSupporting: '',
        };

        const expectedResult = [
          '"firstName" length must be less than or equal to 35 characters long',
          '"lastName" length must be less than or equal to 35 characters long',
          '"mobilePhoneNumber" length must be less than or equal to 11 characters long',
          '"mobilePhoneNumber" with value "078787878700" fails to match the required pattern: /^07[0-9]{9}$/',
          '"officePhoneNumber" length must be less than or equal to 11 characters long',
          '"officePhoneNumber" with value "078787878000" fails to match the required pattern: /^0[1|2][0-9]{8,9}$|^07[0-9]{9}$/',
          '"email" must be a valid email',
          '"matchesWatched" must be one of [MATCHES_WATCHED__OPTION__FOUR_TO_FIVE, MATCHES_WATCHED__OPTION__ONE_TO_THREE, MATCHES_WATCHED__OPTION__SIX_PLUS, MATCHES_WATCHED__OPTION__ZERO]',
          '"matchesWatched" is not allowed to be empty',
          '"shirtsOwned" must be one of [SHIRTS_OWNED__OPTION__FOUR_TO_FIVE, SHIRTS_OWNED__OPTION__ONE_TO_THREE, SHIRTS_OWNED__OPTION__SIX_PLUS, SHIRTS_OWNED__OPTION__ZERO]',
          '"shirtsOwned" is not allowed to be empty',
          '"yearsSupporting" must be one of [YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE, YEARS_SUPPORTING__OPTION__ONE_TO_THREE, YEARS_SUPPORTING__OPTION__SIX_PLUS, YEARS_SUPPORTING__OPTION__ZERO]',
          '"yearsSupporting" is not allowed to be empty',
          '"isExistingSupporter" must be one of [EXISTING_SUPPORTER__YES, EXISTING_SUPPORTER__NO]',
          '"isExistingSupporter" is not allowed to be empty',
        ];

        const result = surveyValidationSchema.validate(stubbedSurvey, { abortEarly: false });
        const errorMsgs = result.error.details.map((x) => x.message);
        expect(errorMsgs).toEqual(expectedResult);
      });
    });
  });

  it('should report as valid for minimum valid object', () => {
    const stubbedSurvey = {
      firstName: 'Luke',
      lastName: 'Wickstead',
      mobilePhoneNumber: '07878787800',
      officePhoneNumber: '07000000000',
      email: STUBBED_EMAIL_ADDRESS,
      isExistingSupporter: EXISTING_SUPPORTER__YES,
      matchesWatched: MATCHES_WATCHED__OPTION__ZERO,
      shirtsOwned: SHIRTS_OWNED__OPTION__ZERO,
      yearsSupporting: YEARS_SUPPORTING__OPTION__ZERO,
    };

    const result = surveyValidationSchema.validate(stubbedSurvey, { abortEarly: false });
    expect(result.error).toBeUndefined();
  });

  it('should report as valid for maximum valid object', () => {
    const stubbedSurvey = {
      firstName: '1'.repeat(35),
      lastName: '1'.repeat(35),
      mobilePhoneNumber: '07878787800',
      officePhoneNumber: '07000000000',
      email: 'fooooooooooooo@fooooooooooooooooooo.c.ukm',
      isExistingSupporter: EXISTING_SUPPORTER__NO,
      matchesWatched: MATCHES_WATCHED__OPTION__SIX_PLUS,
      shirtsOwned: SHIRTS_OWNED__OPTION__SIX_PLUS,
      yearsSupporting: YEARS_SUPPORTING__OPTION__SIX_PLUS,
    };

    const result = surveyValidationSchema.validate(stubbedSurvey, { abortEarly: false });
    expect(result.error).toBeUndefined();
  });

  describe('of all valid years supporting enums', () => {
    const getApplicationForYearsSupporting = (yearsSupporting) => ({
      firstName: '1'.repeat(35),
      lastName: '1'.repeat(35),
      mobilePhoneNumber: '07878787800',
      officePhoneNumber: '07000000000',
      email: STUBBED_EMAIL_ADDRESS,
      isExistingSupporter: EXISTING_SUPPORTER__NO,
      matchesWatched: MATCHES_WATCHED__OPTION__SIX_PLUS,
      shirtsOwned: SHIRTS_OWNED__OPTION__SIX_PLUS,
      yearsSupporting,
    });

    it('should report as valid for all valid years supporting values', () => {
      const yearsManagingEnums = [
        YEARS_SUPPORTING__OPTION__ZERO,
        YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
        YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
        YEARS_SUPPORTING__OPTION__SIX_PLUS,
      ];

      yearsManagingEnums.forEach((yearsManagingEnum) => {
        const result = surveyValidationSchema.validate(getApplicationForYearsSupporting(yearsManagingEnum), { abortEarly: false });
        expect(result.error).toBeUndefined();
      });
    });
  });

  describe('of all valid matches watched enums', () => {
    const getApplicationForMatchesWatched = (matchesWatched) => ({
      firstName: '1'.repeat(35),
      lastName: '1'.repeat(35),
      mobilePhoneNumber: '07878787800',
      officePhoneNumber: '07000000000',
      email: STUBBED_EMAIL_ADDRESS,
      isExistingSupporter: EXISTING_SUPPORTER__NO,
      matchesWatched,
      shirtsOwned: SHIRTS_OWNED__OPTION__SIX_PLUS,
      yearsSupporting: YEARS_SUPPORTING__OPTION__ZERO,
    });

    it('should report as valid', () => {
      const matchesWatchedEnums = [
        MATCHES_WATCHED__OPTION__ZERO,
        MATCHES_WATCHED__OPTION__ONE_TO_THREE,
        MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
        MATCHES_WATCHED__OPTION__SIX_PLUS,
      ];

      matchesWatchedEnums.forEach((matchesWatchedEnum) => {
        const result = surveyValidationSchema.validate(getApplicationForMatchesWatched(matchesWatchedEnum), { abortEarly: false });
        expect(result.error).toBeUndefined();
      });
    });
  });

  describe('of all valid shirts owned', () => {
    const getApplicationForShirtsOwned = (shirtsOwned) => ({
      firstName: '1'.repeat(35),
      lastName: '1'.repeat(35),
      mobilePhoneNumber: '07878787800',
      officePhoneNumber: '07000000000',
      email: STUBBED_EMAIL_ADDRESS,
      isExistingSupporter: EXISTING_SUPPORTER__NO,
      matchesWatched: MATCHES_WATCHED__OPTION__ZERO,
      shirtsOwned,
      yearsSupporting: YEARS_SUPPORTING__OPTION__ZERO,
    });

    it('should report as valid', () => {
      const shirtsOwnedEnums = [
        SHIRTS_OWNED__OPTION__ZERO,
        SHIRTS_OWNED__OPTION__ONE_TO_THREE,
        SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
        SHIRTS_OWNED__OPTION__SIX_PLUS,
      ];

      shirtsOwnedEnums.forEach((shirtsOwnedEnum) => {
        const result = surveyValidationSchema.validate(getApplicationForShirtsOwned(shirtsOwnedEnum), { abortEarly: false });
        expect(result.error).toBeUndefined();
      });
    });
  });
});
