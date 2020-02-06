import { expect } from 'chai';

import {
  putApplicantEmailBackAction,
  putApplicantEmailNextAction,
  putApplicantNameBackAction,
  putApplicantNameNextAction,
  putApplicantPhoneNumberBackAction,
  putApplicantPhoneNumberNextAction,
  putApplicantEmailIntoStateAction,
  putApplicantNameIntoStateAction,
  putApplicantPhoneNumberIntoStateAction,
  putExistingSupporterBackAction,
  putExistingSupporterIntoStateAction,
  putExistingSupporterNextAction,
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
} from '../constants/actions/surveyActionConstants';

describe('surveyActions', () => {
  const stubbedIsExistingSupporter = 'TEST IS CURRENT SUPPORTER';

  describe('when calling putExistingSupporterBackAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterBackAction())
        .to.deep.equal({
          type: EXISTING_SUPPORTER__BACK,
        });
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
      expect(putApplicantNameIntoStateAction('Test FirstName', 'Test Last Name'))
        .to.deep.equal({
          type: PUT__APPLICANT_NAME_INTO_STATE,
          data: {
            firstName: 'Test FirstName',
            lastName: 'Test Last Name',
          },
        });
    });
  });

  describe('applicantNameNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantNameNextAction('Test FirstName', 'Test Last Name'))
        .to.deep.equal({
          type: APPLICANT_NAME__NEXT,
          data: {
            firstName: 'Test FirstName',
            lastName: 'Test Last Name',
          },
        });
    });
  });

  describe('applicantNameNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantNameBackAction('Test FirstName', 'Test Last Name'))
        .to.deep.equal({ type: APPLICANT_NAME__BACK });
    });
  });

  describe('putApplicantPhoneNumberDataAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantPhoneNumberIntoStateAction('Test OfficeNo', 'Test Mobile No'))
        .to.deep.equal({
          type: PUT__APPLICANT_PHONE_NOS_INTO_STATE,
          data: {
            officePhoneNumber: 'Test OfficeNo',
            mobilePhoneNumber: 'Test Mobile No',
          },
        });
    });

    describe('applicantPhoneNumberNextAction', () => {
      it('should return the correct action type and value', () => {
        expect(putApplicantPhoneNumberNextAction('Test OfficeNo', 'Test Mobile No'))
          .to.deep.equal({
            type: APPLICANT_PHONE_NOS__NEXT,
            data: {
              officePhoneNumber: 'Test OfficeNo',
              mobilePhoneNumber: 'Test Mobile No',
            },
          });
      });
    });

    describe('applicantPhoneNumberBackAction', () => {
      it('should return the correct action type and value', () => {
        expect(putApplicantPhoneNumberBackAction())
          .to.deep.equal({ type: APPLICANT_PHONE_NOS__BACK });
      });
    });
  });

  describe('putApplicantEmailDataAction', () => {
    it('should return the correct action type and value', () => {
      expect(putApplicantEmailIntoStateAction('Test Email'))
        .to.deep.equal({
          type: PUT__APPLICANT_EMAIL_INTO_STATE,
          data: {
            email: 'Test Email',
          },
        });
    });

    describe('applicantPhoneNumberNextAction', () => {
      it('should return the correct action type and value', () => {
        expect(putApplicantEmailNextAction('Test Email'))
          .to.deep.equal({
            type: APPLICANT_EMAIL__NEXT,
            data: {
              email: 'Test Email',
            },
          });
      });
    });

    describe('applicantEmailBackAction', () => {
      it('should return the correct action type and value', () => {
        expect(putApplicantEmailBackAction())
          .to.deep.equal({ type: APPLICANT_EMAIL__BACK });
      });
    });
  });
});
