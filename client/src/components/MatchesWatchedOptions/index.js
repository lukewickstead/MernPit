import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  MATCHES_WATCHED__FIELD_NAME,
  MATCHES_WATCHED__LABEL,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
  MATCHES_WATCHED__OPTION__ZERO,
  MATCHES_WATCHED__OPTION__ZERO__LABEL,
} from '../../constants/surveyConstants';

function MatchesWatchedOptions(
  {
    handleInputChange,
    isInvalid,
    isVisited,
    value,
  },
) {
  const questionConfig = {
    name: MATCHES_WATCHED__FIELD_NAME,
    questions: [
      {
        title: MATCHES_WATCHED__OPTION__ZERO__LABEL,
        subTitle: 'Matches',
        value: MATCHES_WATCHED__OPTION__ZERO,
      },
      {
        title: MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
        subTitle: 'Matches',
        value: MATCHES_WATCHED__OPTION__ONE_TO_THREE,
      },
      {
        title: MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
        subTitle: 'Matches',
        value: MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
      },
      {
        title: MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
        subTitle: 'Matches',
        value: MATCHES_WATCHED__OPTION__SIX_PLUS,
      },
    ],
  };

  return (
    <QuestionOptionHorizontal
      handleInputChange={handleInputChange}
      isInvalid={isInvalid}
      isVisited={isVisited}
      questionConfig={questionConfig}
      title={MATCHES_WATCHED__LABEL}
      value={value}
    />
  );
}

MatchesWatchedOptions.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default MatchesWatchedOptions;
