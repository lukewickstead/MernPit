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
  PUT__IS_BUSY_INTO_STATE,
  PUT__SUPPORTER_EXPERIENCE_INTO_STATE,
  PUT__SURVEY_FIELD_INTO_STATE,
  SUMMARY__BACK,
  SUMMARY__NEXT,
  SUPPORTER_EXPERIENCE__BACK,
  SUPPORTER_EXPERIENCE__NEXT,
} from '../constants/actions/surveyActionConstants';

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

export function putApplicantNameNextAction(firstName, lastName) {
  return {
    type: APPLICANT_NAME__NEXT,
    data: {
      firstName,
      lastName,
    },
  };
}

export function putApplicantNameIntoStateAction(firstName, lastName) {
  return {
    type: PUT__APPLICANT_NAME_INTO_STATE,
    data: {
      firstName,
      lastName,
    },
  };
}

export function putApplicantNameBackAction() {
  return { type: APPLICANT_NAME__BACK };
}

export function putApplicantEmailNextAction(email) {
  return {
    type: APPLICANT_EMAIL__NEXT,
    data: {
      email,
    },
  };
}

export function putApplicantEmailIntoStateAction(email) {
  return {
    type: PUT__APPLICANT_EMAIL_INTO_STATE,
    data: {
      email,
    },
  };
}

export function putApplicantEmailBackAction() {
  return { type: APPLICANT_EMAIL__BACK };
}

export function putApplicantPhoneNumberNextAction(officePhoneNumber, mobilePhoneNumber) {
  return {
    type: APPLICANT_PHONE_NOS__NEXT,
    data: {
      officePhoneNumber,
      mobilePhoneNumber,
    },
  };
}

export function putApplicantPhoneNumberIntoStateAction(officePhoneNumber, mobilePhoneNumber) {
  return {
    type: PUT__APPLICANT_PHONE_NOS_INTO_STATE,
    data: {
      officePhoneNumber,
      mobilePhoneNumber,
    },
  };
}

export function putApplicantPhoneNumberBackAction() {
  return { type: APPLICANT_PHONE_NOS__BACK };
}

export function putSupporterExperienceIntoStateAction(yearsSupporting, matchesWatched, shirtsOwned) {
  return {
    type: PUT__SUPPORTER_EXPERIENCE_INTO_STATE,
    data: {
      yearsSupporting,
      matchesWatched,
      shirtsOwned,
    },
  };
}

export function putSupporterExperienceNextAction(yearsSupporting, matchesWatched, shirtsOwned) {
  return {
    type: SUPPORTER_EXPERIENCE__NEXT,
    data: {
      yearsSupporting,
      matchesWatched,
      shirtsOwned,
    },
  };
}

export function putSupporterExperienceBackAction() {
  return { type: SUPPORTER_EXPERIENCE__BACK };
}

export function putSurveyFieldIntoStateAction(fieldName, fieldValue) {
  return {
    type: PUT__SURVEY_FIELD_INTO_STATE,
    data: {
      [fieldName]: fieldValue,
    },
  };
}

export function putSummaryNextAction() {
  return { type: SUMMARY__NEXT };
}

export function putSummaryBackAction() {
  return { type: SUMMARY__BACK };
}

export function putIsBusyAction(
  isBusy,
) {
  return {
    type: PUT__IS_BUSY_INTO_STATE,
    data: {
      isBusy,
    },
  };
}

