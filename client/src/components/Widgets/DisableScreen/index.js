import React from 'react';
import PropTypes from 'prop-types';

/**
 * Disables the entrie screen by greying it out.
 */
function DisableScreen({ isEnabled }) {
  if (isEnabled) {
    return <div className="disable-screen disable-screen-enabled" />;
  }

  return null;
}

DisableScreen.propTypes = {
  /** Enables and disables the disable screen */
  isEnabled: PropTypes.bool.isRequired,
};

export default DisableScreen;
