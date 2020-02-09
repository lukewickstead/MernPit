import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingPage({ title, subTitle, nextUrl }) {
  return (

    <div className="landing-page-layout-container">
      <div className="landing-page-layout-inner-container">

        <div className="landing-page-header">
          <h2 className="landing-page-header-title">Plymouth Argyle Survey</h2>
        </div>

        <h1>{title}</h1>
        <p>{subTitle}</p>

        <Link className="cta-button-primnary" to={nextUrl}>Continue</Link>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};

export default LandingPage;
