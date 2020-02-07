import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  MATCHES_WATCHED__LABEL,
  MATCHES_WATCHED__QUESTION_CONFIG,
} from '../../constants/surveyConstants';

function MatchesWatchedOptions(
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
      questionConfig={MATCHES_WATCHED__QUESTION_CONFIG}
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
