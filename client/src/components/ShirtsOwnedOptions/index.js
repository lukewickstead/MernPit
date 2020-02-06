import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionHorizontal from '../Widgets/QuestionOptionHorizontal';

import {
  SHIRTS_OWNED__FIELD_NAME,
  SHIRTS_OWNED__LABEL,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
  SHIRTS_OWNED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__ZERO__LABEL,
} from '../../constants/surveyConstants';

function ShirtsOwnedOptions(
  {
    handleInputChange,
    isInvalid,
    isVisited,
    value,
  },
) {
  const questionConfig = {
    name: SHIRTS_OWNED__FIELD_NAME,
    questions: [
      {
        title: SHIRTS_OWNED__OPTION__ZERO__LABEL,
        subTitle: 'Shirts',
        value: SHIRTS_OWNED__OPTION__ZERO,
      },
      {
        title: SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
        subTitle: 'Shirts',
        value: SHIRTS_OWNED__OPTION__ONE_TO_THREE,
      },
      {
        title: SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
        subTitle: 'Shirts',
        value: SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
      },
      {
        title: SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
        subTitle: 'Shirts',
        value: SHIRTS_OWNED__OPTION__SIX_PLUS,
      },
    ],
  };

  return (
    <QuestionOptionHorizontal
      handleInputChange={handleInputChange}
      isInvalid={isInvalid}
      isVisited={isVisited}
      questionConfig={questionConfig}
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
