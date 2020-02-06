import {
  PUT__APPLICANT_EMAIL_INTO_STATE,
  PUT__APPLICANT_NAME_INTO_STATE,
  PUT__APPLICANT_PHONE_NOS_INTO_STATE,
  PUT__EXISTING_SUPPORTER_INTO_STATE,
} from '../constants/actions/surveyActionConstants';

export const initialState = {
  email: '',
  firstName: '',
  isExistingSupporter: '',
  lastName: '',
  mobilePhoneNumber: '',
  officePhoneNumber: '',
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case PUT__APPLICANT_EMAIL_INTO_STATE:
    case PUT__APPLICANT_NAME_INTO_STATE:
    case PUT__APPLICANT_PHONE_NOS_INTO_STATE:
    case PUT__EXISTING_SUPPORTER_INTO_STATE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
