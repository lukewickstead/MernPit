import {
  putApplicantEmailBackAction,
  putApplicantEmailIntoStateAction,
  putApplicantEmailNextAction,
  putApplicantNameBackAction,
  putApplicantNameIntoStateAction,
  putApplicantNameNextAction,
  putApplicantPhoneNumberBackAction,
  putApplicantPhoneNumberIntoStateAction,
  putApplicantPhoneNumberNextAction,
  putExistingSupporterBackAction,
  putExistingSupporterIntoStateAction,
  putExistingSupporterNextAction,
  putIsBusyAction,
  putSummaryBackAction,
  putSummaryNextAction,
  putSupporterExperienceBackAction,
  putSupporterExperienceIntoStateAction,
  putSupporterExperienceNextAction,
  putSurveyFieldIntoStateAction,
} from './surveyActions';

import {
  APPLICANT_EMAIL__BACK,
  APPLICANT_EMAIL__NEXT,
  APPLICANT_NAME__BACK,
  APPLICANT_NAME__NEXT,
  APPLICANT_PHONE_NOS__BACK,
  APPLICANT_PHONE_NOS__NEXT,
  EXISTING_SUPPORTER__BACK,
  EXISTING_SUPPORTER__NEXT,
  PUT__APPLICANT_EMAIL_INTO_STATE,
  PUT__APPLICANT_NAME_INTO_STATE,
  PUT__APPLICANT_PHONE_NOS_INTO_STATE,
  PUT__EXISTING_SUPPORTER_INTO_STATE,
  PUT__IS_BUSY_INTO_STATE,
  PUT__SUPPORTER_EXPERIENCE_INTO_STATE,
  PUT__SURVEY_FIELD_INTO_STATE,
  SUMMARY__BACK,
  SUMMARY__NEXT,
  SUPPORTER_EXPERIENCE__BACK,
  SUPPORTER_EXPERIENCE__NEXT,
} from '../constants/actions/surveyActionConstants';

describe('surveyActions', () => {
  const stubbedEmail = 'TEST EMAIL';
  const stubbedFirstName = 'TEST FIRST NAME';
  const stubbedIsExistingSupporter = 'TEST IS CURRENT SUPPORTER';
  const stubbedLastName = 'TEST LAST NAME';
  const stubbedMatchesWatched = 'TEST MATCHES WATCHED';
  const stubbedMobileNo = 'TEST MOBILE NUMBER';
  const stubbedOfficeNo = 'TEST OFFICE NUMBER';
  const stubbedShirtsOwned = 'TEST SHIRTS OWNED';
  const stubbedYearsSupporting = 'TEST YEARS SUPPORTING';

  describe('when calling putExistingSupporterBackAction', () => {
    it('should return the correct action of type EXISTING_SUPPORTER__BACK and', () => {
      expect(putExistingSupporterBackAction()).toEqual({ type: EXISTING_SUPPORTER__BACK });
    });
  });

  describe('when calling putExistingSupporterNextAction', () => {
    it('should return the correct action of type EXISTING_SUPPORTER__NEXT', () => {
      expect(putExistingSupporterNextAction(stubbedIsExistingSupporter))
        .toEqual({
          type: EXISTING_SUPPORTER__NEXT,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

  describe('when calling putExistingSupporterIntoStateAction', () => {
    it('should return the correct action of type PUT__EXISTING_SUPPORTER_INTO_STATE', () => {
      expect(putExistingSupporterIntoStateAction(stubbedIsExistingSupporter))
        .toEqual({
          type: PUT__EXISTING_SUPPORTER_INTO_STATE,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

  describe('putApplicantNameDataAction', () => {
    it('should return an action of type PUT__APPLICANT_NAME_INTO_STATE', () => {
      expect(putApplicantNameIntoStateAction(stubbedFirstName, stubbedLastName))
        .toEqual({
          type: PUT__APPLICANT_NAME_INTO_STATE,
          data: {
            firstName: stubbedFirstName,
            lastName: stubbedLastName,
          },
        });
    });
  });

  describe('applicantNameNextAction', () => {
    it('should return an action of type APPLICANT_NAME__NEXT', () => {
      expect(putApplicantNameNextAction(stubbedFirstName, stubbedLastName))
        .toEqual({
          type: APPLICANT_NAME__NEXT,
          data: {
            firstName: stubbedFirstName,
            lastName: stubbedLastName,
          },
        });
    });
  });

  describe('putApplicantNameBackAction', () => {
    it('should return an action of type APPLICANT_NAME__BACK', () => {
      expect(putApplicantNameBackAction()).toEqual({ type: APPLICANT_NAME__BACK });
    });
  });

  describe('putApplicantPhoneNumberDataAction', () => {
    it('should return an action of type PUT__APPLICANT_PHONE_NOS_INTO_STATE', () => {
      expect(putApplicantPhoneNumberIntoStateAction(stubbedOfficeNo, stubbedMobileNo))
        .toEqual({
          type: PUT__APPLICANT_PHONE_NOS_INTO_STATE,
          data: {
            officePhoneNumber: stubbedOfficeNo,
            mobilePhoneNumber: stubbedMobileNo,
          },
        });
    });
  });

  describe('applicantPhoneNumberNextAction', () => {
    it('should return an action of type APPLICANT_PHONE_NOS__NEXT', () => {
      expect(putApplicantPhoneNumberNextAction(stubbedOfficeNo, stubbedMobileNo))
        .toEqual({
          type: APPLICANT_PHONE_NOS__NEXT,
          data: {
            officePhoneNumber: stubbedOfficeNo,
            mobilePhoneNumber: stubbedMobileNo,
          },
        });
    });
  });

  describe('applicantPhoneNumberBackAction', () => {
    it('should return an action of type APPLICANT_PHONE_NOS__BACK', () => {
      expect(putApplicantPhoneNumberBackAction()).toEqual({ type: APPLICANT_PHONE_NOS__BACK });
    });
  });

  describe('putApplicantEmailDataAction', () => {
    it('should return an actio n of type PUT__APPLICANT_EMAIL_INTO_STATE', () => {
      expect(putApplicantEmailIntoStateAction(stubbedEmail))
        .toEqual({
          type: PUT__APPLICANT_EMAIL_INTO_STATE,
          data: {
            email: stubbedEmail,
          },
        });
    });
  });

  describe('putApplicantEmailNextAction', () => {
    it('should return an action of type APPLICANT_EMAIL__NEXT', () => {
      expect(putApplicantEmailNextAction(stubbedEmail))
        .toEqual({
          type: APPLICANT_EMAIL__NEXT,
          data: {
            email: stubbedEmail,
          },
        });
    });
  });

  describe('applicantEmailBackAction', () => {
    it('should return an action of type APPLICANT_EMAIL__BACK', () => {
      expect(putApplicantEmailBackAction()).toEqual({ type: APPLICANT_EMAIL__BACK });
    });
  });

  describe('putSupporterExperienceIntoStateAction', () => {
    it('should return an action of type PUT__SUPPORTER_EXPERIENCE_INTO_STATE', () => {
      expect(putSupporterExperienceIntoStateAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))
        .toEqual({
          type: PUT__SUPPORTER_EXPERIENCE_INTO_STATE,
          data: {
            yearsSupporting: stubbedYearsSupporting,
            matchesWatched: stubbedMatchesWatched,
            shirtsOwned: stubbedShirtsOwned,
          },
        });
    });
  });

  describe('putSupporterExperienceNextAction', () => {
    it('should return an action of type SUPPORTER_EXPERIENCE__NEXT', () => {
      expect(putSupporterExperienceNextAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))
        .toEqual({
          type: SUPPORTER_EXPERIENCE__NEXT,
          data: {
            yearsSupporting: stubbedYearsSupporting,
            matchesWatched: stubbedMatchesWatched,
            shirtsOwned: stubbedShirtsOwned,
          },
        });
    });
  });

  describe('putSupporterExperienceBackAction', () => {
    it('should return an action of type SUPPORTER_EXPERIENCE__BACK', () => {
      expect(putSupporterExperienceBackAction()).toEqual({ type: SUPPORTER_EXPERIENCE__BACK });
    });
  });

  describe('putSurveyFieldIntoStateAction', () => {
    it('should return an action of type PUT__SURVEY_FIELD_INTO_STATE', () => {
      const stubbedFieldName = 'TEST FIELD NAME';
      const stubbedFieldValue = 'TEST FIELD VALUE';

      expect(putSurveyFieldIntoStateAction(stubbedFieldName, stubbedFieldValue))
        .toEqual({ type: PUT__SURVEY_FIELD_INTO_STATE, data: { [stubbedFieldName]: stubbedFieldValue } });
    });
  });

  describe('putSummaryNextAction', () => {
    it('should return an action of type SUMMARY__NEXT', () => {
      expect(putSummaryNextAction()).toEqual({ type: SUMMARY__NEXT });
    });
  });

  describe('putSummaryBackAction', () => {
    it('should return an action of type SUMMARY__BACK', () => {
      expect(putSummaryBackAction()).toEqual({ type: SUMMARY__BACK });
    });
  });

  describe('putIsBusyAction', () => {
    it('should return an action of type PUT__IS_BUSY_INTO_STATE', () => {
      expect(putIsBusyAction(true))
        .toEqual({
          type: PUT__IS_BUSY_INTO_STATE,
          data: {
            isBusy: true,
          },
        });
    });
  });
});

