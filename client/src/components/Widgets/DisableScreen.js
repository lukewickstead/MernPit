import React from 'react';
import PropTypes from 'prop-types';

function DisableScreen({ isEnabled }) {
  if (isEnabled) {
    return <div className="disable-screen disable-screen-enabled" />;
  }

  return null;
}

DisableScreen.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
};

export default DisableScreen;
