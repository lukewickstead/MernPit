import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../Widgets/LinkButton';

function LandingPageLayout({ title, subTitle, nextUrl }) {
  return (

    <div className="landing-page-layout-container">
      <div className="landing-page-layout-inner-container" role="navigation">

        <div className="landing-page-header">
          <h2 className="landing-page-header-title">Plymouth Argyle Survey</h2>
        </div>

        <h1>{title}</h1>
        <p>{subTitle}</p>

        <LinkButton toUrl={nextUrl} />
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
