import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionText from '../../components/Widgets/QuestionText';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { putApplicantEmailNextAction, putApplicantEmailBackAction } from '../../actions/surveyActions';
import { validateApplicantEmail } from '../../validation/applicantValidation';

import {
  APPLICANT_EMAIL__BACK,
  APPLICANT_EMAIL__NEXT,
} from '../../constants/actions/surveyActionConstants';

import {
  APPLICANT_EMAIL,
  APPLICANT_EMAIL__TITLE,
  APPLICANT_EMAIL__FIELD_NAME,
  APPLICANT_EMAIL__MAX_LENGTH,
} from '../../constants/surveyConstants';

class ApplicantName extends React.Component {
  constructor(props) {
    super(props);

    const emilValidationMsg = this.isValid(props.applicantEmailGlobal);

    this.state = {
      email: props.applicantEmailGlobal,
      emailIsInvalid: emilValidationMsg.length > 0,
      emailIsVisited: false,
      emailValidationMessage: emilValidationMsg,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const validationMsg = this.isValid(value);

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

  isValid = (value) => validateApplicantEmail(value);

  handleSubmit = (event) => {
    const { putApplicantEmailNextActionHandler } = this.props;
    const { email, emailIsInvalid } = this.state;

    if (emailIsInvalid) {
      this.setState({
        emailIsVisited: true,
      });
    } else {
      putApplicantEmailNextActionHandler(email);
      event.preventDefault();
    }
  }

  handleBack = (event) => {
    const { putApplicantEmailBackActionHandler } = this.props;
    putApplicantEmailBackActionHandler();
    event.preventDefault();
  }

  render() {
    const {
      email,
      emailIsInvalid,
      emailIsVisited,
      emailValidationMessage,
    } = this.state;

    return (
      <div className="central-column-layout-container">
        <h1>
          Now we need a few personal details
        </h1>
        <div className="central-column-layout-container-inner">
          <form>
            <QuestionText
              handleInputChange={this.handleInputChange}
              onblur={this.onBlur}
              id={APPLICANT_EMAIL}
              value={email}
              name={APPLICANT_EMAIL__FIELD_NAME}
              title={APPLICANT_EMAIL__TITLE}
              maxLength={APPLICANT_EMAIL__MAX_LENGTH}
              isInvalid={emailIsInvalid}
              isVisited={emailIsVisited}
              validationMessage={emailValidationMessage}
            />

            <SubmitBackButtons
              handleSubmit={this.handleSubmit}
              handleBack={this.handleBack}
              backId={APPLICANT_EMAIL__BACK}
              forwardId={APPLICANT_EMAIL__NEXT}
            />
          </form>
        </div>
      </div>
    );
  }
}

ApplicantName.propTypes = {
  putApplicantEmailBackActionHandler: PropTypes.func.isRequired,
  putApplicantEmailNextActionHandler: PropTypes.func.isRequired,
  applicantEmailGlobal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  applicantEmailGlobal: state.survey.email,
});

const mapDispatchToProps = (dispatch) => ({
  putApplicantEmailBackActionHandler: () => dispatch(putApplicantEmailBackAction()),
  putApplicantEmailNextActionHandler: (email) => {
    dispatch(putApplicantEmailNextAction(email));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantName);
