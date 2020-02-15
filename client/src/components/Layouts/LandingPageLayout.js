import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingPageLayout({ title, subTitle, nextUrl }) {
  return (

    <div className="landing-page-layout-container">
      <div className="landing-page-layout-inner-container" role="navigation">

        <div className="landing-page-header">
          <h2 className="landing-page-header-title">Plymouth Argyle Survey</h2>
        </div>

        <h1>{title}</h1>
        <p>{subTitle}</p>

        <Link className="cta-button-primary" to={nextUrl}>Continue</Link>
      </div>
    </div>
  );
}

LandingPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};

export default LandingPageLayout;
