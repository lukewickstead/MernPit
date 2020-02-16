import {
  validateApplicantFirstName,
  validateApplicantLastName,
  validateApplicantPhoneNumber,
  validateApplicantMobilePhoneNumber,
  validateApplicantEmail,
  validateApplicantOfficeOrMobilePhoneNumber,
  validateSurveyField,
} from './applicantValidation';

import {
  APPLICANT_FIRST_NAME__INVALID_MSG,
  APPLICANT_FIRST_NAME__INVALID_MAX_MSG,
  APPLICANT_LAST_NAME__INVALID_MSG,
  APPLICANT_LAST_NAME__INVALID_MAX_MSG,
  APPLICANT_PHONE_NUMBER__INVALID_MSG,
  APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG,
  APPLICANT_EMAIL__INVALID_MSG,
  APPLICANT_FIRST_NAME__FIELD_NAME,
  APPLICANT_LAST_NAME__FIELD_NAME,
  APPLICANT_EMAIL__FIELD_NAME,
  APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_PHONE_NUMBER__FIELD_NAME,
} from '../constants/surveyConstants';

describe('when validating applicantValidation', () => {
  describe('when validating validateApplicantFirstName', () => {
    it('should invalidate if no value is provided', () => {
      const result = validateApplicantFirstName('');
      expect(result).toEqual(APPLICANT_FIRST_NAME__INVALID_MSG);
    });

    it('should invalidate if more than 35 chars are provided', () => {
      const result = validateApplicantFirstName('a'.repeat(36));
      expect(result).toEqual(APPLICANT_FIRST_NAME__INVALID_MAX_MSG);
    });

    it('should be validate if 35 chars are provided', () => {
      const result = validateApplicantFirstName('a'.repeat(35));
      expect(result).toEqual('');
    });

    it('should be validate if 1 chars are provided', () => {
      const result = validateApplicantFirstName('a');
      expect(result).toEqual('');
    });
  });

  describe('when validating validateApplicantLastName', () => {
    it('should invalidate if no value is provided', () => {
      const result = validateApplicantLastName('');
      expect(result).toEqual(APPLICANT_LAST_NAME__INVALID_MSG);
    });

    it('should invalidate if more than 35 chars are provided', () => {
      const result = validateApplicantLastName('a'.repeat(36));
      expect(result).toEqual(APPLICANT_LAST_NAME__INVALID_MAX_MSG);
    });

    it('should be validate if 35 chars are provided', () => {
      const result = validateApplicantLastName('a'.repeat(35));
      expect(result).toEqual('');
    });

    it('should be validate if 1 chars are provided', () => {
      const result = validateApplicantLastName('a');
      expect(result).toEqual('');
    });
  });

  describe('when validating validateApplicantPhoneNumber', () => {
    it('should invalidate if no value is provided', () => {
      const result = validateApplicantPhoneNumber('');
      expect(result).toEqual(APPLICANT_PHONE_NUMBER__INVALID_MSG);
    });

    it('should invalidate if more 11 chars are present', () => {
      const result = validateApplicantPhoneNumber('0123456789012');
      expect(result).toEqual(APPLICANT_PHONE_NUMBER__INVALID_MSG);
    });

    it('should be invalid with min chars and does not start with 01 or 02', () => {
      const result = validateApplicantPhoneNumber('0323456789');
      expect(result).toEqual(APPLICANT_PHONE_NUMBER__INVALID_MSG);
    });

    it('should be invalid with min chars and does not start with 0', () => {
      const result = validateApplicantPhoneNumber('1323456789');
      expect(result).toEqual(APPLICANT_PHONE_NUMBER__INVALID_MSG);
    });

    it('should be valid with min chars and starts with 01', () => {
      const result = validateApplicantPhoneNumber('0123456789');
      expect(result).toEqual('');
    });

    it('should be valid with min chars and starts with 02', () => {
      const result = validateApplicantPhoneNumber('0223456789');
      expect(result).toEqual('');
    });

    it('should be valid with max chars and starts with 01', () => {
      const result = validateApplicantPhoneNumber('01234567890');
      expect(result).toEqual('');
    });
  });

  describe('when validating validateApplicantMobilePhoneNumber', () => {
    it('should invalidate if no value is provided', () => {
      const result = validateApplicantMobilePhoneNumber('');
      expect(result).toEqual(APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG);
    });

    it('should invalidate if it does not start with 07', () => {
      const result = validateApplicantMobilePhoneNumber('06123456789');
      expect(result).toEqual(APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG);
    });

    it('should invalidate if it is less than 11 chars', () => {
      const result = validateApplicantMobilePhoneNumber('0712345678');
      expect(result).toEqual(APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG);
    });

    it('should invalidate if it is more than 11 chars', () => {
      const result = validateApplicantMobilePhoneNumber('071234567890');
      expect(result).toEqual(APPLICANT_MOBILE_PHONE_NUMBER__INVALID_MSG);
    });

    it('should be valid if a UK mobile phone number is provided it is more than 11 chars', () => {
      const result = validateApplicantMobilePhoneNumber('07123456789');
      expect(result).toEqual('');
    });
  });

  describe('when validating validateApplicantEmail', () => {
    it('should invalidate if no value is provided', () => {
      const result = validateApplicantEmail('');
      expect(result).toEqual(APPLICANT_EMAIL__INVALID_MSG);
    });

    it('should invalidate if no first part is provided', () => {
      const result = validateApplicantEmail('@foo.com');
      expect(result).toEqual(APPLICANT_EMAIL__INVALID_MSG);
    });

    it('should invalidate if no second part is provided', () => {
      const result = validateApplicantEmail('foo@');
      expect(result).toEqual(APPLICANT_EMAIL__INVALID_MSG);
    });

    it('should invalidate if no @  is provided', () => {
      const result = validateApplicantEmail('foo.at.foo.com');
      expect(result).toEqual(APPLICANT_EMAIL__INVALID_MSG);
    });

    it('should validate is a valid email is provided', () => {
      const result = validateApplicantEmail('foo@foo.com');
      expect(result).toEqual('');
    });
  });

  describe('when validating validateApplicantOfficeOrMobilePhoneNumber', () => {
    it('should validate a landline number', () => {
      const result = validateApplicantOfficeOrMobilePhoneNumber('01234567890');
      expect(result).toEqual('');
    });

    it('should validate a mobile number', () => {
      const result = validateApplicantOfficeOrMobilePhoneNumber('07123456789');
      expect(result).toEqual('');
    });

    it('should invalidate when neither a landline or mobile number', () => {
      const result = validateApplicantOfficeOrMobilePhoneNumber('NO PHONE NUMBER');
      expect(result).toEqual(APPLICANT_PHONE_NUMBER__INVALID_MSG);
    });
  });

  describe('when calling validateSurveyField', () => {
    describe('with the field APPLICANT_FIRST_NAME__FIELD_NAME', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField(APPLICANT_FIRST_NAME__FIELD_NAME, 'John')).toEqual('');
      });
    });

    describe('with the field APPLICANT_LAST_NAME__FIELD_NAME', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField(APPLICANT_LAST_NAME__FIELD_NAME, 'Smith')).toEqual('');
      });
    });

    describe('with the field APPLICANT_EMAIL__FIELD_NAME', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField(APPLICANT_EMAIL__FIELD_NAME, 'John@Smith.com')).toEqual('');
      });
    });

    describe('with the field APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField(APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME, '07987987977')).toEqual('');
      });
    });

    describe('with the field APPLICANT_PHONE_NUMBER__FIELD_NAME', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField(APPLICANT_PHONE_NUMBER__FIELD_NAME, '01319879878')).toEqual('');
      });
    });

    describe('with another field', () => {
      it('can validate a valid value correctly.', () => {
        expect(validateSurveyField('UNKNOWN FIELD', '0798798797897')).toEqual('');
      });

      it('can INvalidate an invalid value correctly.', () => {
        expect(validateSurveyField('UNKNOWN FIELD', '')).toEqual('Please select a value');
      });
    });
  });
});
