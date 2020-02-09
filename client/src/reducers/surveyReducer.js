import {
  PUT__APPLICANT_EMAIL_INTO_STATE,
  PUT__APPLICANT_NAME_INTO_STATE,
  PUT__APPLICANT_PHONE_NOS_INTO_STATE,
  PUT__EXISTING_SUPPORTER_INTO_STATE,
  PUT__IS_BUSY_INTO_STATE,
  PUT__SUPPORTER_EXPERIENCE_INTO_STATE,
  PUT__SURVEY_FIELD_INTO_STATE,
} from '../constants/actions/surveyActionConstants';

export const initialState = {
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
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case PUT__APPLICANT_EMAIL_INTO_STATE:
    case PUT__APPLICANT_NAME_INTO_STATE:
    case PUT__APPLICANT_PHONE_NOS_INTO_STATE:
    case PUT__EXISTING_SUPPORTER_INTO_STATE:
    case PUT__IS_BUSY_INTO_STATE:
    case PUT__SUPPORTER_EXPERIENCE_INTO_STATE:
    case PUT__SURVEY_FIELD_INTO_STATE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
