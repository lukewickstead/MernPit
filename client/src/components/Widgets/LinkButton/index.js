import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkButton({ toUrl }) {
  return (<Link className="cta-button-primary" to={toUrl}>Continue</Link>);
}

LinkButton.propTypes = {
  toUrl: PropTypes.string.isRequired,
};

export default LinkButton;
