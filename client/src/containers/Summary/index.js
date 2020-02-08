import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditableSummaryRow from '../../components/Widgets/SummaryRow';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { FIELD_TYPE__NUMBER, FIELD_TYPE__OPTION } from '../../constants/common';
import { YEARS_SUPPORTING_PROP_TYPE, MATCHES_WATCHED_PROP_TYPE, SHIRTS_OWNED_PROP_TYPE } from '../../helpers/propTypeHelper';
import { createGetEnumLookUpHelper } from '../../../../common/enumLookUpHelper';
import { putSurveyFieldIntoStateAction } from '../../actions/surveyActions';
import { validateSurveyField } from '../../validation/applicantValidation';

import {
  APPLICANT_EMAIL,
  APPLICANT_EMAIL__FIELD_NAME,
  APPLICANT_EMAIL__MAX_LENGTH,
  APPLICANT_EMAIL__TITLE,
  APPLICANT_FIRST_NAME,
  APPLICANT_FIRST_NAME__FIELD_NAME,
  APPLICANT_FIRST_NAME__LABEL,
  APPLICANT_FIRST_NAME__MAX_LENGTH,
  APPLICANT_LAST_NAME,
  APPLICANT_LAST_NAME__FIELD_NAME,
  APPLICANT_LAST_NAME__LABEL,
  APPLICANT_LAST_NAME__MAX_LENGTH,
  APPLICANT_MOBILE_PHONE_NUMBER,
  APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_MOBILE_PHONE_NUMBER__LABEL,
  APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH,
  APPLICANT_PHONE_NUMBER,
  APPLICANT_PHONE_NUMBER__FIELD_NAME,
  APPLICANT_PHONE_NUMBER__LABEL,
  APPLICANT_PHONE_NUMBER__MAX_LENGTH,
  MATCHES_WATCHED,
  MATCHES_WATCHED__FIELD_NAME,
  MATCHES_WATCHED__SUMMARY_LABEL,
  YEARS_SUPPORTING,
  YEARS_SUPPORTING__FIELD_NAME,
  YEARS_SUPPORTING__QUESTION_CONFIG,
  YEARS_SUPPORTING__SUMMARY_LABEL,
  MATCHES_WATCHED__QUESTION_CONFIG,
  SHIRTS_OWNED__FIELD_NAME,
  SHIRTS_OWNED,
  SHIRTS_OWNED__QUESTION_CONFIG,
  SHIRTS_OWNED__SUMMARY_LABEL,
} from '../../constants/surveyConstants';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldNameInEdit: '',
      fieldNameInEditValue: '',
      isValid: true,
      isVisited: false,
      validationMessage: '',
    };

    this.getDisplayValueForEnum = createGetEnumLookUpHelper();
  }

  onBlur = () => {
    this.setState({
      isVisited: true,
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const validationMessage = this.isValid(name, value);

    this.setState({
      fieldNameInEditValue: value,
      isValid: validationMessage.length === 0,
      validationMessage,
    });
  }

  editOnClickHandler = (name) => {
    this.setState({
      isValid: true,
      isVisited: false,
      fieldNameInEdit: name,
      fieldNameInEditValue: this.getCurrentStateForField(name),
      validationMessage: '',
    });
  }

  getCurrentStateForField = (name) => {
    const {
      firstName,
      lastName,
      email,
      officePhoneNumber,
      mobilePhoneNumber,
      matchesWatched,
      shirtsOwned,
      yearsSupporting,
    } = this.props;

    switch (name) {
      case APPLICANT_FIRST_NAME__FIELD_NAME:
        return firstName;
      case APPLICANT_LAST_NAME__FIELD_NAME:
        return lastName;
      case APPLICANT_EMAIL__FIELD_NAME:
        return email;
      case APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME:
        return mobilePhoneNumber;
      case APPLICANT_PHONE_NUMBER__FIELD_NAME:
        return officePhoneNumber;
      case MATCHES_WATCHED__FIELD_NAME:
        return matchesWatched;
      case YEARS_SUPPORTING__FIELD_NAME:
        return yearsSupporting;
      case SHIRTS_OWNED__FIELD_NAME:
        return shirtsOwned;
      default:
        return '';
    }
  }

  saveOnClickHandler = () => {
    const {
      fieldNameInEdit,
      fieldNameInEditValue,
      isValid,
    } = this.state;

    if (!isValid) {
      return;
    }

    const { putSurveyFieldIntoStateActionHandler } = this.props;
    putSurveyFieldIntoStateActionHandler(fieldNameInEdit, fieldNameInEditValue);

    this.stopEditOnClickHandler();
  }

  stopEditOnClickHandler = () => {
    this.setState({
      fieldNameInEdit: '',
      isValid: true,
      validationMessage: '',
    });
  }

  isValid = (name, value) => validateSurveyField(name, value)

  render() {
    const {
      email,
      firstName,
      lastName,
      matchesWatched,
      mobilePhoneNumber,
      officePhoneNumber,
      shirtsOwned,
      yearsSupporting,
    } = this.props;

    const {
      fieldNameInEdit,
      fieldNameInEditValue,
      isValid,
      isVisited,
      validationMessage,
    } = this.state;

    return (
      <div className="central-column-layout-container">
        <h1>Summary</h1>

        <div className="central-column-layout-container-inner">
          <div className="summary-table-container">

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              handleInputChange={this.handleInputChange}
              id={APPLICANT_FIRST_NAME}
              includeSeparator
              isInEdit={fieldNameInEdit === APPLICANT_FIRST_NAME__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              maxLength={APPLICANT_FIRST_NAME__MAX_LENGTH}
              name={APPLICANT_FIRST_NAME__FIELD_NAME}
              onBlurHandler={this.onBlur}
              readonlyDisplayValue={firstName}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={APPLICANT_FIRST_NAME__LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === APPLICANT_FIRST_NAME__FIELD_NAME ? fieldNameInEditValue : firstName}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              handleInputChange={this.handleInputChange}
              id={APPLICANT_LAST_NAME}
              includeSeparator
              isInEdit={fieldNameInEdit === APPLICANT_LAST_NAME__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              maxLength={APPLICANT_LAST_NAME__MAX_LENGTH}
              name={APPLICANT_LAST_NAME__FIELD_NAME}
              onBlurHandler={this.onBlur}
              readonlyDisplayValue={lastName}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={APPLICANT_LAST_NAME__LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === APPLICANT_LAST_NAME__FIELD_NAME ? fieldNameInEditValue : lastName}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              handleInputChange={this.handleInputChange}
              id={APPLICANT_EMAIL}
              includeSeparator
              isInEdit={fieldNameInEdit === APPLICANT_EMAIL__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              maxLength={APPLICANT_EMAIL__MAX_LENGTH}
              name={APPLICANT_EMAIL__FIELD_NAME}
              onBlurHandler={this.onBlur}
              readonlyDisplayValue={email}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={APPLICANT_EMAIL__TITLE}
              validationMessage={validationMessage}
              value={fieldNameInEdit === APPLICANT_EMAIL__FIELD_NAME ? fieldNameInEditValue : email}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              fieldType={FIELD_TYPE__NUMBER}
              handleInputChange={this.handleInputChange}
              id={APPLICANT_PHONE_NUMBER}
              includeSeparator
              isInEdit={fieldNameInEdit === APPLICANT_PHONE_NUMBER__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              maxLength={APPLICANT_PHONE_NUMBER__MAX_LENGTH}
              name={APPLICANT_PHONE_NUMBER__FIELD_NAME}
              onBlurHandler={this.onBlur}
              readonlyDisplayValue={officePhoneNumber}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={APPLICANT_PHONE_NUMBER__LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === APPLICANT_PHONE_NUMBER__FIELD_NAME ? fieldNameInEditValue : officePhoneNumber}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              fieldType={FIELD_TYPE__NUMBER}
              handleInputChange={this.handleInputChange}
              id={APPLICANT_MOBILE_PHONE_NUMBER}
              includeSeparator
              isInEdit={fieldNameInEdit === APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              maxLength={APPLICANT_MOBILE_PHONE_NUMBER__MAX_LENGTH}
              name={APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME}
              onBlurHandler={this.onBlur}
              readonlyDisplayValue={mobilePhoneNumber}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={APPLICANT_MOBILE_PHONE_NUMBER__LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === APPLICANT_MOBILE_PHONE_NUMBER__FIELD_NAME ? fieldNameInEditValue : mobilePhoneNumber}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              fieldType={FIELD_TYPE__OPTION}
              handleInputChange={this.handleInputChange}
              id={YEARS_SUPPORTING}
              includeSeparator
              isInEdit={fieldNameInEdit === YEARS_SUPPORTING__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              name={YEARS_SUPPORTING__FIELD_NAME}
              onBlurHandler={this.onBlur}
              questionConfig={YEARS_SUPPORTING__QUESTION_CONFIG}
              readonlyDisplayValue={this.getDisplayValueForEnum(yearsSupporting)}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={YEARS_SUPPORTING__SUMMARY_LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === YEARS_SUPPORTING__FIELD_NAME ? fieldNameInEditValue : yearsSupporting}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              fieldType={FIELD_TYPE__OPTION}
              handleInputChange={this.handleInputChange}
              id={MATCHES_WATCHED}
              includeSeparator
              isInEdit={fieldNameInEdit === MATCHES_WATCHED__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              name={MATCHES_WATCHED__FIELD_NAME}
              onBlurHandler={this.onBlur}
              questionConfig={MATCHES_WATCHED__QUESTION_CONFIG}
              readonlyDisplayValue={this.getDisplayValueForEnum(matchesWatched)}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={MATCHES_WATCHED__SUMMARY_LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === MATCHES_WATCHED__FIELD_NAME ? fieldNameInEditValue : matchesWatched}
            />

            <EditableSummaryRow
              editOnClickHandler={this.editOnClickHandler}
              fieldType={FIELD_TYPE__OPTION}
              handleInputChange={this.handleInputChange}
              id={SHIRTS_OWNED}
              includeSeparator
              isInEdit={fieldNameInEdit === SHIRTS_OWNED__FIELD_NAME}
              isValid={isValid}
              isVisited={isVisited}
              name={SHIRTS_OWNED__FIELD_NAME}
              onBlurHandler={this.onBlur}
              questionConfig={SHIRTS_OWNED__QUESTION_CONFIG}
              readonlyDisplayValue={this.getDisplayValueForEnum(shirtsOwned)}
              saveOnClickHandler={this.saveOnClickHandler}
              stopEditOnClickHandler={this.stopEditOnClickHandler}
              title={SHIRTS_OWNED__SUMMARY_LABEL}
              validationMessage={validationMessage}
              value={fieldNameInEdit === SHIRTS_OWNED__FIELD_NAME ? fieldNameInEditValue : shirtsOwned}
            />

            <SubmitBackButtons
              displaySubmit
              handleSubmit={() => {}}
              handleBack={() => {}}
              backId="SUMMARY__BACK"
              forwardId="SUMMARY__NEXT"
            />
          </div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  matchesWatched: MATCHES_WATCHED_PROP_TYPE.isRequired,
  mobilePhoneNumber: PropTypes.string.isRequired,
  officePhoneNumber: PropTypes.string.isRequired,
  putSurveyFieldIntoStateActionHandler: PropTypes.func.isRequired,
  shirtsOwned: SHIRTS_OWNED_PROP_TYPE.isRequired,
  yearsSupporting: YEARS_SUPPORTING_PROP_TYPE.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.survey.email,
  firstName: state.survey.firstName,
  isExistingSupporter: state.survey.isExistingSupporter,
  lastName: state.survey.lastName,
  matchesWatched: state.survey.matchesWatched,
  mobilePhoneNumber: state.survey.mobilePhoneNumber,
  officePhoneNumber: state.survey.officePhoneNumber,
  shirtsOwned: state.survey.shirtsOwned,
  yearsSupporting: state.survey.yearsSupporting,
});

const mapDispatchToProps = (dispatch) => ({
  putSurveyFieldIntoStateActionHandler: (fieldName, value) => dispatch(putSurveyFieldIntoStateAction(fieldName, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);

