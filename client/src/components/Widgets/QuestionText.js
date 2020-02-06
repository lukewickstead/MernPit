import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';
import TooltipQuestionHeading from './TooltipQuestionHeading';
import { TOOLTIP_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

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
  const validInvalidStyle = `validation-container-${isInvalid ? 'invalid' : 'valid'}`;

  return (
    <div className={`question-text-container validation-container validation-container-${isVisited ? 'visited' : 'not-visited'} ${value.length > 0 || isInvalid ? validInvalidStyle : ''}`}>
      <TooltipQuestionHeading title={title} tooltipConfig={tooltipConfig} tooltipId={tooltipId} />
      <div className="validation-input-wrapper">
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={handleInputChange}
          onBlur={onblur}
        />
      </div>

      { isInvalid && isVisited && <ValidationMessage validationMessage={validationMessage} /> }
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
