import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionNumber from '../../components/Widgets/QuestionNumber';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { APPLICANT_PHONE_NOS__NEXT, APPLICANT_PHONE_NOS__BACK } from '../../constants/actions/surveyActionConstants';
import { putApplicantPhoneNumberBackAction, putApplicantPhoneNumberNextAction } from '../../actions/surveyActions';

import {
  APPLICANT_MOBILE_PHONE_NUMBER,
  APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_MOBILE_PHONE_NUMBER__LABEL,
  APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH,
  APPLICANT_PHONE_NUMBER,
  APPLICANT_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_PHONE_NUMBER__LABEL,
  APPLICANT_PHONE_NUMBER__MAX_LENGTH,
} from '../../constants/surveyConstants';

import {
  validateApplicantMobilePhoneNumber,
  validateApplicantOfficeOrMobilePhoneNumber,
} from '../../validation/applicantValidation';

class ApplicantPhoneNumber extends React.Component {
  constructor(props) {
    super(props);

    const entityPhoneValidationMsg = this.isValid(APPLICANT_PHONE_NUMBER__FIELD_NAME, props.applicantOfficePhoneNumberGlobal);
    const entityMobileValidationMsg = this.isValid(APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME, props.applicantMobilePhoneNumberGlobal);

    this.state = {
      mobilePhoneNumber: props.applicantMobilePhoneNumberGlobal,
      mobilePhoneNumberIsInvalid: entityMobileValidationMsg.length > 0,
      mobilePhoneNumberIsVisited: false,
      mobilePhoneNumberValidationMessage: entityMobileValidationMsg,

      officePhoneNumber: props.applicantOfficePhoneNumberGlobal,
      officePhoneNumberIsInvalid: entityPhoneValidationMsg.length > 0,
      officePhoneNumberIsVisited: false,
      officePhoneNumberValidationMessage: entityPhoneValidationMsg,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const validationMsg = this.isValid(name, value);

    this.setState({
      [name]: value,
      [`${name}IsInvalid`]: validationMsg.length > 0,
      [`${name}ValidationMessage`]: validationMsg,
    });
  }

  onBlur = (event) => {
    const { name } = event.target;
    this.setState({
      [`${name}IsVisited`]: true,
    });
  }

  isValid = (name, value) => {
    switch (name) {
      case APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME:
        return validateApplicantMobilePhoneNumber(value);
      case APPLICANT_PHONE_NUMBER__FIELD_NAME:
        return validateApplicantOfficeOrMobilePhoneNumber(value);
      default:
        return '';
    }
  }

  handleSubmit = (event) => {
    const { putApplicantPhoneNumberNextActionHandler } = this.props;
    const {
      mobilePhoneNumber,
      mobilePhoneNumberIsInvalid,
      officePhoneNumber,
      officePhoneNumberIsInvalid,
    } = this.state;

    if (mobilePhoneNumberIsInvalid || officePhoneNumberIsInvalid) {
      this.setState({
        mobilePhoneNumberIsVisited: true,
        officePhoneNumberIsVisited: true,
      });
    } else {
      putApplicantPhoneNumberNextActionHandler(officePhoneNumber, mobilePhoneNumber);
      event.preventDefault();
    }
  }

  handleBack = (event) => {
    const { putApplicantPhoneNumberBackActionHandler } = this.props;
    putApplicantPhoneNumberBackActionHandler();
    event.preventDefault();
  }

  render() {
    const {
      mobilePhoneNumber,
      mobilePhoneNumberIsInvalid,
      mobilePhoneNumberIsVisited,
      mobilePhoneNumberValidationMessage,
      officePhoneNumber,
      officePhoneNumberIsInvalid,
      officePhoneNumberIsVisited,
      officePhoneNumberValidationMessage,
    } = this.state;

    return (
      <div className="central-column-layout-container">
        <h1>
          What are your telephone numbers?
        </h1>
        <div className="central-column-layout-container-inner">
          <form>
            <QuestionNumber
              handleInputChange={this.handleInputChange}
              id={APPLICANT_PHONE_NUMBER}
              isInvalid={officePhoneNumberIsInvalid}
              isVisited={officePhoneNumberIsVisited}
              maxLength={APPLICANT_PHONE_NUMBER__MAX_LENGTH}
              name={APPLICANT_PHONE_NUMBER__FIELD_NAME}
              onblur={this.onBlur}
              title={APPLICANT_PHONE_NUMBER__LABEL}
              validationMessage={officePhoneNumberValidationMessage}
              value={officePhoneNumber}
            />

            <QuestionNumber
              handleInputChange={this.handleInputChange}
              id={APPLICANT_MOBILE_PHONE_NUMBER}
              isInvalid={mobilePhoneNumberIsInvalid}
              isVisited={mobilePhoneNumberIsVisited}
              maxLength={APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH}
              name={APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME}
              onblur={this.onBlur}
              title={APPLICANT_MOBILE_PHONE_NUMBER__LABEL}
              validationMessage={mobilePhoneNumberValidationMessage}
              value={mobilePhoneNumber}
            />

            <SubmitBackButtons
              backId={APPLICANT_PHONE_NOS__BACK}
              forwardId={APPLICANT_PHONE_NOS__NEXT}
              handleBack={this.handleBack}
              handleSubmit={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

ApplicantPhoneNumber.propTypes = {
  putApplicantPhoneNumberBackActionHandler: PropTypes.func.isRequired,
  putApplicantPhoneNumberNextActionHandler: PropTypes.func.isRequired,
  applicantMobilePhoneNumberGlobal: PropTypes.string.isRequired,
  applicantOfficePhoneNumberGlobal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  applicantMobilePhoneNumberGlobal: state.survey.mobilePhoneNumber,
  applicantOfficePhoneNumberGlobal: state.survey.officePhoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  putApplicantPhoneNumberBackActionHandler: () => dispatch(putApplicantPhoneNumberBackAction()),
  putApplicantPhoneNumberNextActionHandler: (officePhoneNumber, mobilePhoneNumber) => {
    dispatch(putApplicantPhoneNumberNextAction(officePhoneNumber, mobilePhoneNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantPhoneNumber);
