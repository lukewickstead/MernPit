import surveyReducer from './surveyReducer';

import {
  putApplicantEmailIntoStateAction,
  putApplicantNameIntoStateAction,
  putApplicantPhoneNumberIntoStateAction,
  putExistingSupporterIntoStateAction,
  putSupporterExperienceIntoStateAction,
  putSurveyFieldIntoStateAction,
  putIsBusyAction,
} from '../actions/surveyActions';

describe('applicantReducer ', () => {
  const stubbedEmail = 'TEST EMAIL';
  const stubbedFirstName = 'TEST FIRST NAME';
  const stubbedIsExistingSupporter = 'Test IS SUPPORTER';
  const stubbedLastName = 'TEST LAST NAME';
  const stubbedMatchesWatched = 'TEST MATCHES WATCHED';
  const stubbedMobileNo = 'TEST MOBILE NUMBER';
  const stubbedOfficeNo = 'TEST OFFICE NUMBER';
  const stubbedShirtsOwned = 'TEST SHIRTS OWNED';
  const stubbedYearsSupporting = 'TEST YEARS SUPPORTING';

  it('should return the initial state', () => {
    expect(surveyReducer(undefined, {})).toEqual({
      email: '',
      firstName: '',
      isBusy: false,
      isExistingSupporter: '',
      lastName: '',
      matchesWatched: '',
      mobilePhoneNumber: '',
      officePhoneNumber: '',
      shirtsOwned: '',
      yearsSupporting: '',
    });
  });

  it('should reduce PUT__EXISTING_SUPPORTER_INTO_STATE', () => {
    expect(surveyReducer({}, putExistingSupporterIntoStateAction(stubbedIsExistingSupporter))).toEqual({ isExistingSupporter: stubbedIsExistingSupporter });
  });

  it('should reduce PUT__APPLICANT_EMAIL_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantEmailIntoStateAction(stubbedEmail))).toEqual({ email: stubbedEmail });
  });

  it('should reduce PUT__APPLICANT_PHONE_NOS_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantPhoneNumberIntoStateAction(stubbedOfficeNo, stubbedMobileNo))).toEqual({
      officePhoneNumber: stubbedOfficeNo,
      mobilePhoneNumber: stubbedMobileNo,
    });
  });

  it('should reduce PUT__APPLICANT_NAME_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantNameIntoStateAction(stubbedFirstName, stubbedLastName))).toEqual({
      firstName: stubbedFirstName,
      lastName: stubbedLastName,
    });
  });

  it('should reduce PUT__SUPPORTER_EXPERIENCE_INTO_STATE', () => {
    expect(surveyReducer({}, putSupporterExperienceIntoStateAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))).toEqual({
      yearsSupporting: stubbedYearsSupporting,
      matchesWatched: stubbedMatchesWatched,
      shirtsOwned: stubbedShirtsOwned,
    });
  });

  it('should reduce PUT__SURVEY_FIELD_INTO_STATE', () => {
    const stubbedFieldName = 'TEST FIELD NAME';
    const stubbedValue = 'TEST VALUE';
    expect(surveyReducer({}, putSurveyFieldIntoStateAction(stubbedFieldName, stubbedValue))).toEqual({ [stubbedFieldName]: stubbedValue });
  });

  it('should reduce PUT__IS_BUSY_INTO_STATE', () => {
    expect(surveyReducer({}, putIsBusyAction(true))).toEqual({ isBusy: true });
  });
});

