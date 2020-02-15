import React from 'react';
import { withRouter } from 'react-router-dom';

import { LOCATION_PROP_TYPE } from '../../../helpers/propTypeHelper';
import { URL__HOME, URL__ERROR, URL__CONFIRMATION } from '../../../constants/urlConstants';

/**
 * The main web site header.
 */
function Header({
  location,
}) {
  const { pathname } = location;
  if (pathname === URL__HOME || pathname === URL__ERROR || pathname === URL__CONFIRMATION) {
    return null;
  }

  return (
    <div className="header-container" role="banner">
      <div className="header-container-inner">
        <h1 className="header-title">PAFC Survey</h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  /**
   * Location is handled by the react router and should not be passed in.
   *
   * @ignore
   */
  location: LOCATION_PROP_TYPE.isRequired,
};

export default withRouter(Header);
