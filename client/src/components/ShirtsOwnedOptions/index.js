import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  SHIRTS_OWNED__LABEL,
  SHIRTS_OWNED__QUESTION_CONFIG,
} from '../../constants/surveyConstants';

function ShirtsOwnedOptions(
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
      questionConfig={SHIRTS_OWNED__QUESTION_CONFIG}
      title={SHIRTS_OWNED__LABEL}
      value={value}
    />
  );
}

ShirtsOwnedOptions.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default ShirtsOwnedOptions;
