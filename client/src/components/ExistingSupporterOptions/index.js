import React from 'react';
import PropTypes from 'prop-types';

import QuestionOption from '../Widgets/QuestionOption';

import {
  EXISTING_SUPPORTER__FIELD_NAME,
  EXISTING_SUPPORTER__LABEL,
  EXISTING_SUPPORTER__NO,
  EXISTING_SUPPORTER__NO__DISPLAY,
  EXISTING_SUPPORTER__TOOLTIP_CLICK_ID,
  EXISTING_SUPPORTER__TOOLTIP_CONFIG,
  EXISTING_SUPPORTER__YES,
  EXISTING_SUPPORTER__YES__DISPLAY,
} from '../../constants/surveyConstants';

function ExistingSupporterOptions(
  {
    handleInputChange,
    isInvalid,
    isVisited,
    value,
  },
) {
  const questionConfig = {
    name: EXISTING_SUPPORTER__FIELD_NAME,
    questions: [
      {
        title: EXISTING_SUPPORTER__YES__DISPLAY,
        value: EXISTING_SUPPORTER__YES,
      },
      {
        title: EXISTING_SUPPORTER__NO__DISPLAY,
        value: EXISTING_SUPPORTER__NO,
      },
    ],
  };

  return (
    <QuestionOption
      handleInputChange={handleInputChange}
      isInvalid={isInvalid}
      isVisited={isVisited}
      questionConfig={questionConfig}
      title={EXISTING_SUPPORTER__LABEL}
      tooltipConfig={EXISTING_SUPPORTER__TOOLTIP_CONFIG}
      tooltipId={EXISTING_SUPPORTER__TOOLTIP_CLICK_ID}
      value={value}
    />
  );
}

ExistingSupporterOptions.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default ExistingSupporterOptions;
