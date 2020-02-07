import {
  APPLICANT_FIRST_NAME__MAX_LENGTH,
  APPLICANT_FIRST_NAME__INVALID_MSG,
  APPLICANT_FIRST_NAME__INVALID_MAX_MSG,
  APPLICANT_LAST_NAME__MAX_LENGTH,
  APPLICANT_LAST_NAME__INVALID_MSG,
  APPLICANT_LAST_NAME__INVALID_MAX_MSG,
  APPLICANT_PHONE_NUMBER__INVALID_MSG,
  APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG,
  APPLICANT_EMAIL__INVALID_MSG,
  APPLICANT_MOBILE_PHONE__REGEX,
  APPLICANT_PHONE_NUMBER__REGEX,
  APPLICANT_FIRST_NAME__FIELD_NAME,
  APPLICANT_LAST_NAME__FIELD_NAME,
  APPLICANT_EMAIL__FIELD_NAME,
  APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_PHONE_NUMBER__FIELD_NAME,
} from '../constants/surveyConstants';

export function validateApplicantFirstName(value) {
  if (value.length === 0) {
    return APPLICANT_FIRST_NAME__INVALID_MSG;
  } if (value.length > APPLICANT_FIRST_NAME__MAX_LENGTH) {
    return APPLICANT_FIRST_NAME__INVALID_MAX_MSG;
  }

  return '';
}

export function validateApplicantLastName(value) {
  if (value.length === 0) {
    return APPLICANT_LAST_NAME__INVALID_MSG;
  } if (value.length > APPLICANT_LAST_NAME__MAX_LENGTH) {
    return APPLICANT_LAST_NAME__INVALID_MAX_MSG;
  }

  return '';
}

export function validateApplicantPhoneNumber(value) {
  return APPLICANT_PHONE_NUMBER__REGEX.test(value) === true ? '' : APPLICANT_PHONE_NUMBER__INVALID_MSG;
}

export function validateApplicantMobilePhoneNumber(value) {
  return APPLICANT_MOBILE_PHONE__REGEX.test(value) === true ? '' : APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG;
}

export function validateApplicantOfficeOrMobilePhoneNumber(value) {
  const validationPhoneMsg = validateApplicantPhoneNumber(value);
  const validationMobileMsg = validateApplicantMobilePhoneNumber(value);

  if (validationPhoneMsg === '' || validationMobileMsg === '') {
    return '';
  }
  return validationPhoneMsg;
}

export function validateApplicantEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? '' : APPLICANT_EMAIL__INVALID_MSG;
}

export function validateSurveyField(name, value) {
  switch (name) {
    case APPLICANT_FIRST_NAME__FIELD_NAME:
      return validateApplicantFirstName(value);
    case APPLICANT_LAST_NAME__FIELD_NAME:
      return validateApplicantLastName(value);
    case APPLICANT_EMAIL__FIELD_NAME:
      return validateApplicantEmail(value);
    case APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME:
      return validateApplicantMobilePhoneNumber(value);
    case APPLICANT_PHONE_NUMBER__FIELD_NAME:
      return validateApplicantPhoneNumber(value);
    default:
      return value.length > 0 ? '' : 'Please select a value';
  }
}
