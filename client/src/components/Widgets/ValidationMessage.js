import React from 'react';
import PropTypes from 'prop-types';

function ValidationMessage({
  validationMessage,
}) {
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
};

export default ValidationMessage;
