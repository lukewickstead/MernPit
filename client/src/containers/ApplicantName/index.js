import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CentralColumnLayout from '../../components/Layouts/CentralColumnLayout';
import QuestionText from '../../components/Widgets/QuestionText';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { validateApplicantFirstName, validateApplicantLastName } from '../../validation/applicantValidation';
import { putApplicantNameBackAction, putApplicantNameNextAction } from '../../actions/surveyActions';
import { APPLICANT_NAME__BACK, APPLICANT_NAME__NEXT } from '../../constants/actions/surveyActionConstants';

import {
  APPLICANT_FIRST_NAME,
  APPLICANT_FIRST_NAME__LABEL,
  APPLICANT_FIRST_NAME__MAX_LENGTH,
  APPLICANT_FIRST_NAME__FIELD_NAME,
  APPLICANT_LAST_NAME,
  APPLICANT_LAST_NAME__LABEL,
  APPLICANT_LAST_NAME__MAX_LENGTH,
  APPLICANT_LAST_NAME__FIELD_NAME,
} from '../../constants/surveyConstants';

class ApplicantName extends React.Component {
  constructor(props) {
    super(props);

    const firstNameValidationMsg = this.isValid(
      APPLICANT_FIRST_NAME__FIELD_NAME,
      props.applicantFirstNameGlobal,
    );

    const lastNameValidationMsg = this.isValid(
      APPLICANT_LAST_NAME__FIELD_NAME,
      props.applicantLastNameGlobal,
    );

    this.state = {
      firstName: props.applicantFirstNameGlobal,
      firstNameIsInvalid: firstNameValidationMsg.length > 0,
      firstNameIsVisited: false,
      firstNameValidationMessage: firstNameValidationMsg,
      lastName: props.applicantLastNameGlobal,
      lastNameIsInvalid: lastNameValidationMsg.length > 0,
      lastNameIsVisited: false,
      lastNameValidationMessage: lastNameValidationMsg,
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
      case APPLICANT_FIRST_NAME__FIELD_NAME:
        return validateApplicantFirstName(value);
      case APPLICANT_LAST_NAME__FIELD_NAME:
        return validateApplicantLastName(value);
      default:
        return '';
    }
  }

  handleSubmit = (event) => {
    const { putApplicantNameNextActionHandler } = this.props;
    const {
      firstName,
      lastName,
      lastNameIsInvalid,
      firstNameIsInvalid,
    } = this.state;

    if (lastNameIsInvalid || firstNameIsInvalid) {
      this.setState({
        firstNameIsVisited: true,
        lastNameIsVisited: true,
      });
    } else {
      putApplicantNameNextActionHandler(firstName, lastName);
      event.preventDefault();
    }
  }

  handleBack = (event) => {
    const { putApplicantNameBackActionHandler } = this.props;
    putApplicantNameBackActionHandler();
    event.preventDefault();
  }

  render() {
    const {
      firstName,
      firstNameIsInvalid,
      firstNameIsVisited,
      firstNameValidationMessage,
      lastName,
      lastNameIsInvalid,
      lastNameIsVisited,
      lastNameValidationMessage,
    } = this.state;

    return (
      <CentralColumnLayout title="Now we need a few personal details">
        <QuestionText
          handleInputChange={this.handleInputChange}
          onblur={this.onBlur}
          id={APPLICANT_FIRST_NAME}
          value={firstName}
          name={APPLICANT_FIRST_NAME__FIELD_NAME}
          title={APPLICANT_FIRST_NAME__LABEL}
          maxLength={APPLICANT_FIRST_NAME__MAX_LENGTH}
          isInvalid={firstNameIsInvalid}
          isVisited={firstNameIsVisited}
          validationMessage={firstNameValidationMessage}
        />

        <QuestionText
          handleInputChange={this.handleInputChange}
          onblur={this.onBlur}
          id={APPLICANT_LAST_NAME}
          value={lastName}
          name={APPLICANT_LAST_NAME__FIELD_NAME}
          title={APPLICANT_LAST_NAME__LABEL}
          maxLength={APPLICANT_LAST_NAME__MAX_LENGTH}
          isInvalid={lastNameIsInvalid}
          isVisited={lastNameIsVisited}
          validationMessage={lastNameValidationMessage}
        />

        <SubmitBackButtons
          handleSubmit={this.handleSubmit}
          handleBack={this.handleBack}
          backId={APPLICANT_NAME__BACK}
          forwardId={APPLICANT_NAME__NEXT}
        />
      </CentralColumnLayout>
    );
  }
}

ApplicantName.propTypes = {
  putApplicantNameBackActionHandler: PropTypes.func.isRequired,
  putApplicantNameNextActionHandler: PropTypes.func.isRequired,
  applicantLastNameGlobal: PropTypes.string.isRequired,
  applicantFirstNameGlobal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  applicantFirstNameGlobal: state.survey.firstName,
  applicantLastNameGlobal: state.survey.lastName,
});

const mapDispatchToProps = (dispatch) => ({
  putApplicantNameBackActionHandler: () => dispatch(putApplicantNameBackAction()),
  putApplicantNameNextActionHandler: (firstName, lastName) => {
    dispatch(putApplicantNameNextAction(firstName, lastName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantName);
