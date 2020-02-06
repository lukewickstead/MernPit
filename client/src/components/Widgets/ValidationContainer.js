import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';

function ValidationContainer({
  isInvalid,
  isVisited,
  validationMessage,
  value,
  children,
}) {
  const validInvalidStyle = `validation-container-${isInvalid ? 'invalid' : 'valid'}`;

  return (
    <div className={`validation-container validation-container-${isVisited ? 'visited' : 'not-visited'} ${value.length > 0 || isInvalid ? validInvalidStyle : ''}`}>
      {children}

      <ValidationMessage
        isInvalid={isInvalid}
        isVisited={isVisited}
        validationMessage={validationMessage}
      />
    </div>
  );
}

ValidationContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  validationMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValidationContainer;
