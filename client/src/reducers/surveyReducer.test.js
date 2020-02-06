import { expect } from 'chai';

import surveyReducer from './surveyReducer';

import {
  putApplicantEmailIntoStateAction,
  putApplicantNameIntoStateAction,
  putApplicantPhoneNumberIntoStateAction,
  putExistingSupporterIntoStateAction,
  putSupporterExperienceIntoStateAction,
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
    expect(surveyReducer(undefined, {})).deep.equal({
      email: '',
      firstName: '',
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
    expect(surveyReducer({}, putExistingSupporterIntoStateAction(stubbedIsExistingSupporter))).deep.equal({ isExistingSupporter: stubbedIsExistingSupporter });
  });

  it('should reduce PUT__APPLICANT_EMAIL_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantEmailIntoStateAction(stubbedEmail))).deep.equal({ email: stubbedEmail });
  });

  it('should reduce PUT__APPLICANT_PHONE_NOS_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantPhoneNumberIntoStateAction(stubbedOfficeNo, stubbedMobileNo))).deep.equal({
      officePhoneNumber: stubbedOfficeNo,
      mobilePhoneNumber: stubbedMobileNo,
    });
  });

  it('should reduce PUT__APPLICANT_NAME_INTO_STATE', () => {
    expect(surveyReducer({}, putApplicantNameIntoStateAction(stubbedFirstName, stubbedLastName))).deep.equal({
      firstName: stubbedFirstName,
      lastName: stubbedLastName,
    });
  });

  it('should reduce PUT__SUPPORTER_EXPERIENCE_INTO_STATE', () => {
    expect(surveyReducer({}, putSupporterExperienceIntoStateAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned))).deep.equal({
      yearsSupporting: stubbedYearsSupporting,
      matchesWatched: stubbedMatchesWatched,
      shirtsOwned: stubbedShirtsOwned,
    });
  });
});

