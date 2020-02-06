import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { expect } from 'chai';

import watchSurveyAggregateSaga, {
  applicantEmailBackSaga,
  applicantEmailNextSaga,
  applicantExistingSupporterBackSaga,
  applicantExistingSupporterNextSaga,
  applicantNameBackSaga,
  applicantNameNextSaga,
  applicantPhoneBackSaga,
  applicantPhoneNextSaga,
} from './surveySaga';

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
} from '../actions/surveyActions';

import {
  URL__PHONE_NUMBERS,
  URL__EXISTING_SUPPORTER,
  URL__NAME,
  URL__EMAIL,
  URL__HOME,
} from '../constants/urlConstants';

import {
  APPLICANT_NAME__NEXT,
  APPLICANT_NAME__BACK,
  APPLICANT_PHONE_NOS__NEXT,
  APPLICANT_PHONE_NOS__BACK,
  APPLICANT_EMAIL__NEXT,
  APPLICANT_EMAIL__BACK,
  EXISTING_SUPPORTER__NEXT,
  EXISTING_SUPPORTER__BACK,
} from '../constants/actions/surveyActionConstants';

const stubbedIsExistingSupporter = 'Test IS SUPPORTER';
const stubbedEmail = 'TEST EMAIL';
const stubbedFirstName = 'TEST FIRST NAME';
const stubbedLastName = 'TEST LAST NAME';
const stubbedOfficeNo = 'TEST OFFICE NUMBER';
const stubbedMobileNo = 'TEST MOBILE NUMBER';

describe('When on the existing supporter page', () => {
  describe('and the user calls next', () => {
    it('should navigate to /Name and set the correct data into state', () => {
      const action = putExistingSupporterNextAction(stubbedIsExistingSupporter);
      const saga = applicantExistingSupporterNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putExistingSupporterIntoStateAction(stubbedIsExistingSupporter)));
      expect(saga.next().value).to.deep.equal(put(push(URL__NAME)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /Home', () => {
      const action = putExistingSupporterBackAction();
      const saga = applicantExistingSupporterBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__HOME)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });
});

describe('When on the applicant name page', () => {
  describe('and the user calls next', () => {
    it('should navigate to /Phone and set the correct data into state', () => {
      const action = putApplicantNameNextAction(stubbedFirstName, stubbedLastName);
      const saga = applicantNameNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putApplicantNameIntoStateAction(stubbedFirstName, stubbedLastName)));
      expect(saga.next().value).to.deep.equal(put(push(URL__PHONE_NUMBERS)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /ExistingSupporter', () => {
      const action = putApplicantNameBackAction();
      const saga = applicantNameBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__EXISTING_SUPPORTER)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });
});

describe('When on the applicant phone page', () => {
  describe('and the user calls next', () => {
    it('should navigate to /Email and set the correct data into state', () => {
      const action = putApplicantPhoneNumberNextAction(stubbedOfficeNo, stubbedMobileNo);
      const saga = applicantPhoneNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putApplicantPhoneNumberIntoStateAction(stubbedOfficeNo, stubbedMobileNo)));
      expect(saga.next().value).to.deep.equal(put(push(URL__EMAIL)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /Name', () => {
      const action = putApplicantPhoneNumberBackAction();
      const saga = applicantPhoneBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__NAME)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });
});

describe('When on the applicant email page', () => {
  describe('and the user calls next', () => {
    it('should set the correct data into state', () => {
      const action = putApplicantEmailNextAction(stubbedEmail);
      const saga = applicantEmailNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putApplicantEmailIntoStateAction(stubbedEmail)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /Phone', () => {
      const action = putApplicantEmailBackAction();
      const saga = applicantEmailBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__PHONE_NUMBERS)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });
});

describe('when calling watchSurveyAggregateSaga saga', () => {
  it('can watch for all required sagas', () => {
    const saga = watchSurveyAggregateSaga();
    expect(saga.next().value).to.deep.equal(takeEvery(EXISTING_SUPPORTER__NEXT, applicantExistingSupporterNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(EXISTING_SUPPORTER__BACK, applicantExistingSupporterBackSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_NAME__NEXT, applicantNameNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_NAME__BACK, applicantNameBackSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_PHONE_NOS__NEXT, applicantPhoneNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_PHONE_NOS__BACK, applicantPhoneBackSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_EMAIL__NEXT, applicantEmailNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(APPLICANT_EMAIL__BACK, applicantEmailBackSaga));
    expect(saga.next().value).to.deep.equal(undefined);
  });
});
