import React from 'react';
import PropTypes from 'prop-types';

import TooltipQuestionHeading from './TooltipQuestionHeading';
import { TOOLTIP_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';
import ValidationContainer from './ValidationContainer';

/**
 * Question and input as a free text field.
 */
function QuestionText({
  handleInputChange,
  id,
  isInvalid,
  isVisited,
  maxLength,
  name,
  onblur,
  title,
  tooltipConfig,
  tooltipId,
  validationMessage,
  value,
}) {
  return (
    <div className="question-text-container">
      <ValidationContainer
        isInvalid={isInvalid}
        isVisited={isVisited}
        validationMessage={validationMessage}
        value={value}
      >
        <TooltipQuestionHeading title={title} tooltipConfig={tooltipConfig} tooltipId={tooltipId} />
        <div className="validation-input-wrapper">
          <input
            id={id}
            maxLength={maxLength}
            name={name}
            onBlur={onblur}
            onChange={handleInputChange}
            type="text"
            value={value}
          />
        </div>
      </ValidationContainer>
    </div>
  );
}

QuestionText.defaultProps = {
  title: '',
  tooltipConfig: [],
  tooltipId: '',
};

QuestionText.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  maxLength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onblur: PropTypes.func.isRequired,
  title: PropTypes.string,
  tooltipConfig: TOOLTIP_CONFIG_PROP_TYPE,
  tooltipId: PropTypes.string,
  validationMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default QuestionText;
