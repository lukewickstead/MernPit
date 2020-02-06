import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';
import TooltipQuestionHeading from './TooltipQuestionHeading';

import { TOOLTIP_CONFIG_PROP_TYPE, QUESTIONS_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

function QuestionOption({
  handleInputChange, title, questionConfig, value, isInvalid, isVisited, tooltipConfig, tooltipId,
}) {
  const questionItems = questionConfig.questions.map((question) => (
    <li
      key={question.value}
      className={value === question.value ? 'selected' : ''}
    >
      <span className="radio-item" />
      <input
        type="radio"
        id={question.value}
        value={question.value}
        name={questionConfig.name}
        checked={value === question.value}
        onChange={handleInputChange}
      />

      <div className="question-title">
        <label htmlFor={question.value}>{question.title}</label>
      </div>
    </li>
  ));

  return (
    <div className="question-option-container">
      <TooltipQuestionHeading title={title} tooltipConfig={tooltipConfig} tooltipId={tooltipId} />
      <ul>
        {questionItems}
      </ul>

      { isInvalid && isVisited && <ValidationMessage validationMessage="Select a response to continue" /> }
    </div>
  );
}

QuestionOption.defaultProps = {
  title: '',
  tooltipConfig: [],
  tooltipId: '',
};

QuestionOption.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  questionConfig: QUESTIONS_CONFIG_PROP_TYPE.isRequired,
  title: PropTypes.string,
  tooltipConfig: TOOLTIP_CONFIG_PROP_TYPE,
  tooltipId: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default QuestionOption;
