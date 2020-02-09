import { expect } from 'chai';

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
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterBackAction()).to.deep.equal({ type: EXISTING_SUPPORTER__BACK });
    });
  });

  describe('when calling putExistingSupporterNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterNextAction(stubbedIsExistingSupporter))
        .to.deep.equal({
          type: EXISTING_SUPPORTER__NEXT,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

  describe('when calling putExistingSupporterIntoStateAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterIntoStateAction(stubbedIsExistingSupporter))
        .to.deep.equal({
          type: PUT__EXISTING_SUPPORTER_INTO_STATE,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

  describe('putApplicantNameDataAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantNameIntoStateAction(stubbedFirstName, stubbedLastName))
        .to.deep.equal({
          type: PUT__APPLICANT_NAME_INTO_STATE,
          data: {
            firstName: stubbedFirstName,
            lastName: stubbedLastName,
          },
        });
    });
  });

  describe('applicantNameNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantNameNextAction(stubbedFirstName, stubbedLastName))
        .to.deep.equal({
          type: APPLICANT_NAME__NEXT,
          data: {
            firstName: stubbedFirstName,
            lastName: stubbedLastName,
          },
        });
    });
  });

  describe('applicantNameNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantNameBackAction()).to.deep.equal({ type: APPLICANT_NAME__BACK });
    });
  });

  describe('putApplicantPhoneNumberDataAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantPhoneNumberIntoStateAction(stubbedOfficeNo, stubbedMobileNo))
        .to.deep.equal({
          type: PUT__APPLICANT_PHONE_NOS_INTO_STATE,
          data: {
            officePhoneNumber: stubbedOfficeNo,
            mobilePhoneNumber: stubbedMobileNo,
          },
        });
    });
  });

  describe('applicantPhoneNumberNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantPhoneNumberNextAction(stubbedOfficeNo, stubbedMobileNo))
        .to.deep.equal({
          type: APPLICANT_PHONE_NOS__NEXT,
          data: {
            officePhoneNumber: stubbedOfficeNo,
            mobilePhoneNumber: stubbedMobileNo,
          },
        });
    });
  });

  describe('applicantPhoneNumberBackAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantPhoneNumberBackAction()).to.deep.equal({ type: APPLICANT_PHONE_NOS__BACK });
    });
  });

  describe('putApplicantEmailDataAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantEmailIntoStateAction(stubbedEmail))
        .to.deep.equal({
          type: PUT__APPLICANT_EMAIL_INTO_STATE,
          data: {
            email: stubbedEmail,
          },
        });
    });
  });

  describe('applicantPhoneNumberNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantEmailNextAction(stubbedEmail))
        .to.deep.equal({
          type: APPLICANT_EMAIL__NEXT,
          data: {
            email: stubbedEmail,
          },
        });
    });
  });

  describe('applicantEmailBackAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantEmailBackAction()).to.deep.equal({ type: APPLICANT_EMAIL__BACK });
    });
  });

  describe('putSupporterExperienceIntoStateAction', () => {
    it('should return the correct action type and value', () => {
      expect(putSupporterExperienceIntoStateAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))
        .to.deep.equal({
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
    it('should return the correct action type and value', () => {
      expect(putSupporterExperienceNextAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))
        .to.deep.equal({
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
    it('should return the correct action type and value', () => {
      expect(putSupporterExperienceBackAction()).to.deep.equal({ type: SUPPORTER_EXPERIENCE__BACK });
    });
  });

  describe('putSurveyFieldIntoStateAction', () => {
    it('should return the correct action type and value', () => {
      const stubbedFieldName = 'TEST FIELD NAME';
      const stubbedFieldValue = 'TEST FIELD VALUE';

      expect(putSurveyFieldIntoStateAction(stubbedFieldName, stubbedFieldValue))
        .to.deep.equal({ type: PUT__SURVEY_FIELD_INTO_STATE, data: { [stubbedFieldName]: stubbedFieldValue } });
    });
  });

  describe('putSummaryNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putSummaryNextAction()).to.deep.equal({ type: SUMMARY__NEXT });
    });
  });

  describe('putSummaryBackAction', () => {
    it('should return the correct action type and value', () => {
      expect(putSummaryBackAction()).to.deep.equal({ type: SUMMARY__BACK });
    });
  });

  describe('putIsBusyAction', () => {
    it('should return the correct action type and value', () => {
      expect(putIsBusyAction(true))
        .to.deep.equal({
          type: PUT__IS_BUSY_INTO_STATE,
          data: {
            isBusy: true,
          },
        });
    });
  });
});

