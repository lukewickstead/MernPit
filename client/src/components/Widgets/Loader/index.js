import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DisableScreen from '../DisableScreen';

/**
 * Provides a loading spinner and optionally disabling the screen
 */
function Loader({ isEnabled, msg }) {
  const loaderClasses = classnames(
    'loader',
    { 'loader-enabled': isEnabled },
  );

  return (
    <>
      <div className={loaderClasses}>
        <div className="loader-content" />
        <h2>{msg}</h2>
      </div>

      <DisableScreen isEnabled={isEnabled} />
    </>
  );
}
Loader.defaultProps = {
  msg: 'Please wait...',
};

Loader.propTypes = {
  /** Enables and disables the disable screen */
  isEnabled: PropTypes.bool.isRequired,

  /** Overrides the message displayed to the user */
  msg: PropTypes.string,
};

export default Loader;
