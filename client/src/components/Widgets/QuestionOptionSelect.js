import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';
import { QUESTIONS_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

function QuestionOptionSelect({
  handleInputChange, title, id, optionIdPrefix, questionConfig, value, isInvalid, isVisited,
}) {
  const questionItems = questionConfig.questions.map((question) => (
    <option
      id={`${optionIdPrefix}${question.value}`}
      key={question.value}
      value={question.value}
    >
      {`${question.title} ${question.subTitle}`}
    </option>
  ));

  return (
    <div className="question-option-select-container">
      {title.length > 0
        && <h2>{title}</h2>}
      <select
        id={id}
        value={value}
        onChange={handleInputChange}
      >
        {questionItems}
      </select>

      <ValidationMessage isInvalid={isInvalid} isVisited={isVisited} validationMessage="Select a response to continue" />
    </div>
  );
}

QuestionOptionSelect.defaultProps = {
  title: '',
  id: '',
  optionIdPrefix: '',
};

QuestionOptionSelect.propTypes = {
  id: PropTypes.string,
  optionIdPrefix: PropTypes.string,
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  questionConfig: QUESTIONS_CONFIG_PROP_TYPE.isRequired,
};

export default QuestionOptionSelect;
