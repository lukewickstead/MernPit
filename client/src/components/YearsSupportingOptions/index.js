import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  YEARS_SUPPORTING__FIELD_NAME,
  YEARS_SUPPORTING__LABEL,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
  YEARS_SUPPORTING__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__ZERO__LABEL,
} from '../../constants/surveyConstants';

function YearsSupportingOptions(
  {
    handleInputChange,
    isInvalid,
    isVisited,
    value,
  },
) {
  const questionConfig = {
    name: YEARS_SUPPORTING__FIELD_NAME,
    questions: [
      {
        title: YEARS_SUPPORTING__OPTION__ZERO__LABEL,
        subTitle: 'Years',
        value: YEARS_SUPPORTING__OPTION__ZERO,
      },
      {
        title: YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
        subTitle: 'Years',
        value: YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
      },
      {
        title: YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
        subTitle: 'Years',
        value: YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
      },
      {
        title: YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
        subTitle: 'Years',
        value: YEARS_SUPPORTING__OPTION__SIX_PLUS,
      },
    ],
  };

  return (
    <QuestionOptionHorizontal
      handleInputChange={handleInputChange}
      isInvalid={isInvalid}
      isVisited={isVisited}
      questionConfig={questionConfig}
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
