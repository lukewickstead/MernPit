import { expect } from 'chai';
import { getSurveyDetailsFromState } from './selectors';

describe('when calling selectors', () => {
  describe('with selector getApplicantDetailsFromState', () => {
    it('should return the right value', () => {
      const stubbedState = {
        survey: {
          email: 'TEST APPLICANT EMAIL',
          firstName: 'TEST APPLICANT FIRST NAME',
          isBusy: true,
          lastName: 'TEST APPLICANT LAST NAME',
          mobilePhoneNumber: 'TEST APPLICANT MOBILE PHONE NO.',
          officePhoneNumber: 'TEST APPLICANT OFFICE PHONE NO.',
        },
      };

      const expectedSurvey = {
        email: 'TEST APPLICANT EMAIL',
        firstName: 'TEST APPLICANT FIRST NAME',
        lastName: 'TEST APPLICANT LAST NAME',
        mobilePhoneNumber: 'TEST APPLICANT MOBILE PHONE NO.',
        officePhoneNumber: 'TEST APPLICANT OFFICE PHONE NO.',
      };

      expect(getSurveyDetailsFromState(stubbedState)).to.deep.equal(expectedSurvey);
    });
  });
});

