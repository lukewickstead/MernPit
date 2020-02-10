import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DisableScreen from './DisableScreen';

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
  isEnabled: PropTypes.bool.isRequired,
  msg: PropTypes.string,
};

export default Loader;
