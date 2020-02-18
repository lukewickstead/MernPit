import React from 'react';
import PropTypes from 'prop-types';

import QuestionText from '../QuestionText';
import QuestionNumber from '../QuestionNumber';
import QuestionOptionSelect from '../QuestionOptionSelect';

import { FIELD_TYPE_PROP_TYPE, QUESTIONS_CONFIG_PROP_TYPE } from '../../../helpers/propTypeHelper';

import {
  FIELD_TYPE__NUMBER,
  FIELD_TYPE__OPTION,
  FIELD_TYPE__TEXT,
} from '../../../constants/common';

/**
 * Summary page field; readonly and editable states for each required field type
 */
function EditableSummaryRow(
  {
    editOnClickHandler,
    fieldType,
    handleInputChange,
    id,
    includeSeparator,
    isInEdit,
    isValid,
    isVisited,
    maxLength,
    name,
    onBlurHandler,
    questionConfig,
    readonlyDisplayValue,
    saveOnClickHandler,
    stopEditOnClickHandler,
    title,
    validationMessage,
    value,
  },
) {
  if (!isInEdit) {
    return (
      <>
        <div className="summary-row">
          <div className="summary-row-heading">
            <span className="summary-row-heading-label">{title}</span>
            <span className="summary-row-heading-buttons-wrapper">
              <button
                className="summary-row-heading-edit-button"
                id={`Summary_Edit_Button__${id}`}
                type="button"
                onClick={() => editOnClickHandler(name)}
              >
                Edit
              </button>
            </span>
          </div>
          <div className="summary-row-value">{readonlyDisplayValue}</div>
        </div>

        {includeSeparator && <div className="summary-row-separator" /> }
      </>
    );
  }

  const inputId = `Summary_Edit_Input__${id}`;

  return (
    <>
      <div className="summary-row">
        <div className="summary-row-heading">
          <span className="summary-row-heading-label">
            <label htmlFor={inputId}>
              {title}
            </label>
          </span>

          <span className="summary-row-heading-buttons-wrapper">
            <button className="summary-row-heading-save-button" id={`Summary_Save_Button__${id}`} type="button" onClick={saveOnClickHandler}>Save</button>
            <button id={`Summary_Stop_Edit_Button__${id}`} type="button" onClick={stopEditOnClickHandler}>Close</button>
          </span>
        </div>

        <div className="summary-row-value">
          { fieldType === FIELD_TYPE__TEXT
          && (
          <QuestionText
            handleInputChange={handleInputChange}
            onblur={onBlurHandler}
            id={inputId}
            value={value}
            name={name}
            maxLength={maxLength}
            isInvalid={!isValid}
            isVisited={isVisited}
            validationMessage={validationMessage}
          />
          )}

          { fieldType === FIELD_TYPE__NUMBER
          && (
          <QuestionNumber
            handleInputChange={handleInputChange}
            onblur={onBlurHandler}
            id={inputId}
            value={value}
            name={name}
            maxLength={maxLength}
            isInvalid={!isValid}
            isVisited={isVisited}
            validationMessage={validationMessage}
          />
          )}

          { fieldType === FIELD_TYPE__OPTION
          && (
            <QuestionOptionSelect
              handleInputChange={handleInputChange}
              id={inputId}
              optionIdPrefix="Summary_Edit_Input_"
              value={value}
              questionConfig={questionConfig}
              isInvalid={!isValid}
              isVisited={isVisited}
            />
          )}

        </div>
      </div>

      {includeSeparator && <div className="summary-row-separator" /> }
    </>
  );
}

EditableSummaryRow.defaultProps = {
  maxLength: 0,
  questionConfig: [],
};

EditableSummaryRow.propTypes = {
  editOnClickHandler: PropTypes.func.isRequired,
  fieldType: FIELD_TYPE_PROP_TYPE,
  handleInputChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  includeSeparator: PropTypes.bool,
  isInEdit: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  questionConfig: QUESTIONS_CONFIG_PROP_TYPE,
  readonlyDisplayValue: PropTypes.string.isRequired,
  saveOnClickHandler: PropTypes.func.isRequired,
  stopEditOnClickHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

EditableSummaryRow.defaultProps = {
  includeSeparator: false,
  fieldType: FIELD_TYPE__TEXT,
};

export default EditableSummaryRow;
