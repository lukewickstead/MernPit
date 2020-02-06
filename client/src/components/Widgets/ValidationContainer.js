import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ValidationMessage from './ValidationMessage';

function ValidationContainer({
  children,
  isInvalid,
  isVisited,
  validationMessage,
}) {
  const containerClassNames = classnames(
    'validation-container',
    { 'validation-container-invalid': isVisited && isInvalid },
    { 'validation-container-valid': isVisited && !isInvalid },
    { 'validation-container-visited': isVisited },
    { 'validation-container-not-visited': !isVisited },
  );
  return (
    <div className={containerClassNames}>
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
};

export default ValidationContainer;
