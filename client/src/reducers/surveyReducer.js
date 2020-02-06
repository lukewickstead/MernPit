import { PUT__EXISTING_SUPPORTER_INTO_STATE } from '../constants/actions/surveyActionConstants';

export const initialState = {
  existingSupporter: '',
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case PUT__EXISTING_SUPPORTER_INTO_STATE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
