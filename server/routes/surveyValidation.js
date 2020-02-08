import {
  APPLICANT_FIRST_NAME__MAX_LENGTH,
  APPLICANT_LAST_NAME__MAX_LENGTH,
  APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH,
  APPLICANT_MOBILE_PHONE__REGEX,
  APPLICANT_PHONE_NUMBER__MIN_LENGTH,
  APPLICANT_PHONE_NUMBER__MAX_LENGTH,
  APPLICANT_PHONE_NUMBER__REGEX,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__ZERO,
  EXISTING_SUPPORTER__YES,
  EXISTING_SUPPORTER__NO,
} from '../../client/src/constants/surveyConstants';

const Joi = require('@hapi/joi');

export default Joi.object()
  .keys({
    firstName: Joi.string()
      .max(APPLICANT_FIRST_NAME__MAX_LENGTH)
      .required(),
    lastName: Joi.string()
      .max(APPLICANT_LAST_NAME__MAX_LENGTH)
      .required(),
    mobilePhoneNumber: Joi.string()
      .min(APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH)
      .max(APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH)
      .regex(APPLICANT_MOBILE_PHONE__REGEX)
      .required(),
    officePhoneNumber: Joi.string()
      .min(APPLICANT_PHONE_NUMBER__MIN_LENGTH)
      .max(APPLICANT_PHONE_NUMBER__MAX_LENGTH)
      .regex(APPLICANT_PHONE_NUMBER__REGEX)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    matchesWatched: Joi.string()
      .valid(
        MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
        MATCHES_WATCHED__OPTION__ONE_TO_THREE,
        MATCHES_WATCHED__OPTION__SIX_PLUS,
        MATCHES_WATCHED__OPTION__ZERO,
      ).required(),
    shirtsOwned: Joi.string()
      .valid(
        SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
        SHIRTS_OWNED__OPTION__ONE_TO_THREE,
        SHIRTS_OWNED__OPTION__SIX_PLUS,
        SHIRTS_OWNED__OPTION__ZERO,
      ).required(),
    yearsSupporting: Joi.string()
      .valid(
        YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
        YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
        YEARS_SUPPORTING__OPTION__SIX_PLUS,
        YEARS_SUPPORTING__OPTION__ZERO,
      ).required(),
    isExistingSupporter: Joi.string()
      .valid(
        EXISTING_SUPPORTER__YES,
        EXISTING_SUPPORTER__NO,
      ).required(),
  }).required();
