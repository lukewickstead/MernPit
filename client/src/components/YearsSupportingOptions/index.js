import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  YEARS_SUPPORTING__LABEL,
  YEARS_SUPPORTING__QUESTION_CONFIG,
} from '../../constants/surveyConstants';

function YearsSupportingOptions(
  {
    handleInputChange,
    isInvalid,
    isVisited,
    value,
  },
) {
  return (
    <QuestionOptionHorizontal
      handleInputChange={handleInputChange}
      isInvalid={isInvalid}
      isVisited={isVisited}
      questionConfig={YEARS_SUPPORTING__QUESTION_CONFIG}
      title={YEARS_SUPPORTING__LABEL}
      value={value}
    />
  );
}

YearsSupportingOptions.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default YearsSupportingOptions;
