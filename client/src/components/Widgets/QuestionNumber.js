import React from 'react';
import PropTypes from 'prop-types';

import QuestionText from './QuestionText';
import { isNumber } from '../../../../common/numberHelper';
import { NUMBER_OR_STRING_PROP_TYPE, TOOLTIP_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

function ensureOnlyNumberEvent(event, handleInputChange) {
  if (isNumber(event.target.value)) {
    handleInputChange(event);
  }
}

function QuestionNumber({
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
    <QuestionText
      handleInputChange={(e) => ensureOnlyNumberEvent(e, handleInputChange)}
      id={id}
      isInvalid={isInvalid}
      isVisited={isVisited}
      maxLength={maxLength}
      name={name}
      onblur={onblur}
      title={title}
      tooltipConfig={tooltipConfig}
      tooltipId={tooltipId}
      validationMessage={validationMessage}
      value={value}
    />
  );
}

QuestionNumber.defaultProps = {
  title: '',
  tooltipConfig: [],
  tooltipId: '',
};

QuestionNumber.propTypes = {
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
  value: NUMBER_OR_STRING_PROP_TYPE.isRequired,
};

export default QuestionNumber;
