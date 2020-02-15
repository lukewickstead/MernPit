import React from 'react';
import { withRouter } from 'react-router-dom';

import { LOCATION_PROP_TYPE } from '../../helpers/propTypeHelper';
import { URL__HOME, URL__ERROR, URL__CONFIRMATION } from '../../constants/urlConstants';

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
  location: LOCATION_PROP_TYPE.isRequired,
};

export default withRouter(Header);
