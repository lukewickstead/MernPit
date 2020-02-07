import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';
import TooltipQuestionHeading from './TooltipQuestionHeading';

import { TOOLTIP_CONFIG_PROP_TYPE, QUESTIONS_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

function QuestionOptionHorizontal({
  handleInputChange,
  title,
  tooltipConfig,
  tooltipId,
  questionConfig,
  value,
  isInvalid,
  isVisited,
  selectIdPrefix,
}) {
  const questionItems = questionConfig.questions.map((question) => (
    <li
      key={question.value}
      className={value === question.value ? 'selected' : ''}
    >
      <input
        type="radio"
        name={questionConfig.name}
        id={`${selectIdPrefix}${question.value}`}
        value={question.value}
        checked={value === question.value}
        onChange={handleInputChange}
      />

      { question.subTitle.length > 0 && (
        <div className="question-title-wrapper">
          <div className="question-title">
            <label htmlFor={`${selectIdPrefix}${question.value}`}>{question.title}</label>
          </div>
          <div className="question-subtitle">
            <label htmlFor={`${selectIdPrefix}${question.value}`}>{question.subTitle}</label>
          </div>
        </div>
      )}

      { question.subTitle.length === 0 && (
        <label htmlFor={`${selectIdPrefix}${question.value}`}>{question.title}</label>
      )}
    </li>
  ));

  return (
    <div className="question-option-horizontal-container">
      <TooltipQuestionHeading title={title} tooltipConfig={tooltipConfig} tooltipId={tooltipId} />
      <ul>
        {questionItems}
      </ul>

      <ValidationMessage isInvalid={isInvalid} isVisited={isVisited} validationMessage="Select a response to continue" />
    </div>
  );
}

QuestionOptionHorizontal.defaultProps = {
  tooltipConfig: [],
  tooltipId: '',
  selectIdPrefix: '',
};

QuestionOptionHorizontal.propTypes = {
  selectIdPrefix: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipConfig: TOOLTIP_CONFIG_PROP_TYPE,
  tooltipId: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  questionConfig: QUESTIONS_CONFIG_PROP_TYPE.isRequired,
};

export default QuestionOptionHorizontal;
