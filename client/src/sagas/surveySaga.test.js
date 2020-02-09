import { expect } from 'chai';
import { push } from 'react-router-redux';

import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';

import { getSurveyDetailsFromState } from '../selectors/selectors';
import { postSurvey } from '../infrastructure/api';

import watchSurveyAggregateSaga, {
  applicantEmailBackSaga,
  applicantEmailNextSaga,
  applicantExistingSupporterBackSaga,
  applicantExistingSupporterNextSaga,
  applicantNameBackSaga,
  applicantNameNextSaga,
  applicantPhoneBackSaga,
  applicantPhoneNextSaga,
  summaryPageBackSaga,
  summaryPageNextSaga,
  supporterExperienceBackSaga,
  supporterExperienceNextSaga,
} from './surveySaga';

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
  putSummaryNextAction,
  putSupporterExperienceBackAction,
  putSupporterExperienceIntoStateAction,
  putSupporterExperienceNextAction,
  putSummaryBackAction,
} from '../actions/surveyActions';

import {
  URL__CONFIRMATION,
  URL__EMAIL,
  URL__EXISTING_SUPPORTER,
  URL__HOME,
  URL__NAME,
  URL__PHONE_NUMBERS,
  URL__SUMMARY,
  URL__SUPPORTER_EXPERIENCE,
  URL__ERROR,
} from '../constants/urlConstants';

import {
  APPLICANT_EMAIL__BACK,
  APPLICANT_EMAIL__NEXT,
  APPLICANT_NAME__BACK,
  APPLICANT_NAME__NEXT,
  APPLICANT_PHONE_NOS__BACK,
  APPLICANT_PHONE_NOS__NEXT,
  EXISTING_SUPPORTER__BACK,
  EXISTING_SUPPORTER__NEXT,
  SUMMARY__BACK,
  SUMMARY__NEXT,
  SUPPORTER_EXPERIENCE__BACK,
  SUPPORTER_EXPERIENCE__NEXT,
} from '../constants/actions/surveyActionConstants';
import getErrorMessageFromServerResponseError from '../helpers/errorHelper';
import { consoleError } from '../helpers/consoleHelper';

const stubbedEmail = 'TEST EMAIL';
const stubbedFirstName = 'TEST FIRST NAME';
const stubbedIsExistingSupporter = 'Test IS SUPPORTER';
const stubbedLastName = 'TEST LAST NAME';
const stubbedMatchesWatched = 'TEST MATCHES WATCHED';
const stubbedMobileNo = 'TEST MOBILE NUMBER';
const stubbedOfficeNo = 'TEST OFFICE NUMBER';
const stubbedShirtsOwned = 'TEST SHIRTS OWNED';
const stubbedYearsSupporting = 'TEST YEARS SUPPORTING';

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
    it('should navigate to Experience and set the correct data into state', () => {
      const action = putApplicantEmailNextAction(stubbedEmail);
      const saga = applicantEmailNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putApplicantEmailIntoStateAction(stubbedEmail)));
      expect(saga.next().value).to.deep.equal(put(push(URL__SUPPORTER_EXPERIENCE)));
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

describe('When on the supporters experience page', () => {
  describe('and the user calls next', () => {
    it('should set the correct data into state', () => {
      const action = putSupporterExperienceNextAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned);
      const saga = supporterExperienceNextSaga(action);

      expect(saga.next().value).to.be.deep.equal(put(putSupporterExperienceIntoStateAction(stubbedYearsSupporting, stubbedMatchesWatched, stubbedShirtsOwned)));
      expect(saga.next().value).to.deep.equal(put(push(URL__SUMMARY)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /Email', () => {
      const action = putSupporterExperienceBackAction();
      const saga = supporterExperienceBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__EMAIL)));
      expect(saga.next().value).to.deep.equal(undefined);
    });
  });
});

describe('when on the summary page', () => {
  describe('and they select the next button', () => {
    it('should submit the survey and navigate to /Confirmation', () => {
      const action = putSummaryNextAction();
      const saga = summaryPageNextSaga(action);

      const stubbedSurveyDetails = 'TEST SURVEY DETAILS';

      expect(saga.next().value).to.deep.equal(put(putIsBusyAction(true)));
      expect(saga.next().value).to.deep.equal(select(getSurveyDetailsFromState));
      expect(saga.next(stubbedSurveyDetails).value).to.deep.equal(call(postSurvey, stubbedSurveyDetails));
      expect(saga.next().value).to.deep.equal(put(push(URL__CONFIRMATION)));
      expect(saga.next().value).to.deep.equal(put(putIsBusyAction(false)));
      expect(saga.next().value).to.deep.equal(undefined);
      expect(saga.next().value).to.deep.equal(undefined);
    });

    describe('and an error is reported posting the survey', () => {
      it('should log the error and navigate to /Error', () => {
        const action = putSummaryNextAction();
        const saga = summaryPageNextSaga(action);

        const stubbedSurveyDetails = 'TEST SURVEY DETAILS';
        const stubbedPostSurveyResponse = { data: 'TEST POST SURVEY RESPONSE' };

        expect(saga.next().value).to.deep.equal(put(putIsBusyAction(true)));
        expect(saga.next().value).to.deep.equal(select(getSurveyDetailsFromState));
        expect(saga.next(stubbedSurveyDetails).value).to.deep.equal(call(postSurvey, stubbedSurveyDetails));
        expect(saga.throw(stubbedPostSurveyResponse).value).to.deep.equal(call(getErrorMessageFromServerResponseError, stubbedPostSurveyResponse));
        expect(saga.next(stubbedPostSurveyResponse.data).value).to.deep.equal(call(consoleError, `Could not submit survey: ${stubbedPostSurveyResponse.data}`));
        expect(saga.next().value).to.deep.equal(put(push(URL__ERROR)));
        expect(saga.next().value).to.deep.equal(put(putIsBusyAction(false)));
        expect(saga.next().value).to.deep.equal(undefined);
      });
    });
  });

  describe('and the user calls back', () => {
    it('the user is redirected to /Experience', () => {
      const action = putSummaryBackAction();
      const saga = summaryPageBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__SUPPORTER_EXPERIENCE)));
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
    expect(saga.next().value).to.deep.equal(takeEvery(SUPPORTER_EXPERIENCE__NEXT, supporterExperienceNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(SUPPORTER_EXPERIENCE__BACK, supporterExperienceBackSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(SUMMARY__NEXT, summaryPageNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(SUMMARY__BACK, summaryPageBackSaga));
    expect(saga.next().value).to.deep.equal(undefined);
  });
});
