import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  putApplicantEmailIntoStateAction,
  putApplicantNameIntoStateAction,
  putApplicantPhoneNumberIntoStateAction,
  putExistingSupporterIntoStateAction,
  putSupporterExperienceIntoStateAction,
} from '../actions/surveyActions';

import {
  URL__EMAIL,
  URL__EXISTING_SUPPORTER,
  URL__HOME,
  URL__NAME,
  URL__PHONE_NUMBERS,
  URL__SUPPORTER_EXPERIENCE,
  URL__SUMMARY,
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
  SUPPORTER_EXPERIENCE__NEXT,
  SUPPORTER_EXPERIENCE__BACK,
} from '../constants/actions/surveyActionConstants';

export function* applicantExistingSupporterNextSaga({ data }) {
  yield put(putExistingSupporterIntoStateAction(data.isExistingSupporter));
  yield put(push(URL__NAME));
}

export function* applicantExistingSupporterBackSaga() {
  yield put(push(URL__HOME));
}

export function* applicantNameNextSaga({ data }) {
  yield put(putApplicantNameIntoStateAction(data.firstName, data.lastName));
  yield put(push(URL__PHONE_NUMBERS));
}

export function* applicantNameBackSaga() {
  yield put(push(URL__EXISTING_SUPPORTER));
}

export function* applicantPhoneNextSaga({ data }) {
  yield put(putApplicantPhoneNumberIntoStateAction(data.officePhoneNumber, data.mobilePhoneNumber));
  yield put(push(URL__EMAIL));
}

export function* applicantPhoneBackSaga() {
  yield put(push(URL__NAME));
}

export function* applicantEmailNextSaga({ data }) {
  yield put(putApplicantEmailIntoStateAction(data.email));
  yield put(push(URL__SUPPORTER_EXPERIENCE));
}

export function* applicantEmailBackSaga() {
  yield put(push(URL__PHONE_NUMBERS));
}

export function* supporterExperienceNextSaga({ data }) {
  yield put(putSupporterExperienceIntoStateAction(data.yearsSupporting, data.matchesWatched, data.shirtsOwned));
  yield put(push(URL__SUMMARY));
}

export function* supporterExperienceBackSaga() {
  yield put(push(URL__EMAIL));
}

export default function* watchSurveyAggregateSaga() {
  yield takeEvery(EXISTING_SUPPORTER__NEXT, applicantExistingSupporterNextSaga);
  yield takeEvery(EXISTING_SUPPORTER__BACK, applicantExistingSupporterBackSaga);
  yield takeEvery(APPLICANT_NAME__NEXT, applicantNameNextSaga);
  yield takeEvery(APPLICANT_NAME__BACK, applicantNameBackSaga);
  yield takeEvery(APPLICANT_PHONE_NOS__NEXT, applicantPhoneNextSaga);
  yield takeEvery(APPLICANT_PHONE_NOS__BACK, applicantPhoneBackSaga);
  yield takeEvery(APPLICANT_EMAIL__NEXT, applicantEmailNextSaga);
  yield takeEvery(APPLICANT_EMAIL__BACK, applicantEmailBackSaga);
  yield takeEvery(SUPPORTER_EXPERIENCE__NEXT, supporterExperienceNextSaga);
  yield takeEvery(SUPPORTER_EXPERIENCE__BACK, supporterExperienceBackSaga);
}
