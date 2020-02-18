import React from 'react';
import PropTypes from 'prop-types';

function ValidationMessage({
  validationMessage,
  isInvalid,
  isVisited,
}) {
  if (!isInvalid || !isVisited) {
    return null;
  }

  return (
    <div className="validation-message-wrapper">
      <div className="validation-arrow" />
      <div className="validation-message">
        {validationMessage}
      </div>
    </div>
  );
}

ValidationMessage.propTypes = {
  validationMessage: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
};

export default ValidationMessage;
