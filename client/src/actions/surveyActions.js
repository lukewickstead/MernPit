import { PUT__EXISTING_SUPPORTER_INTO_STATE, EXISTING_SUPPORTER__NEXT, EXISTING_SUPPORTER__BACK } from '../constants/actions/surveyActionConstants';

export function putExistingSupporterIntoStateAction(isExistingSupporter) {
  return {
    type: PUT__EXISTING_SUPPORTER_INTO_STATE,
    data: {
      isExistingSupporter,
    },
  };
}

export function putExistingSupporterNextAction(isExistingSupporter) {
  return {
    type: EXISTING_SUPPORTER__NEXT,
    data: {
      isExistingSupporter,
    },
  };
}

export function putExistingSupporterBackAction() {
  return {
    type: EXISTING_SUPPORTER__BACK,
  };
}
