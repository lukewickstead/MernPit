import { expect } from 'chai';

import surveyReducer from './surveyReducer';
import {
  putExistingSupporterIntoStateAction,
  putApplicantEmailIntoStateAction,
  putApplicantPhoneNumberIntoStateAction,
  putApplicantNameIntoStateAction,
} from '../actions/surveyActions';

describe('applicantReducer ', () => {
  const stubbedIsExistingSupporter = 'Test IS SUPPORTER';
  const stubbedEmail = 'TEST EMAIL';
  const stubbedFirstName = 'TEST FIRST NAME';
  const stubbedLastName = 'TEST LAST NAME';
  const stubbedOfficeNo = 'TEST OFFICE NUMBER';
  const stubbedMobileNo = 'TEST MOBILE NUMBER';

  it('should return the initial state', () => {
    expect(surveyReducer(undefined, {})).deep.equal({
      email: '',
      isExistingSupporter: '',
      firstName: '',
      lastName: '',
      mobilePhoneNumber: '',
      officePhoneNumber: '',
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
});
