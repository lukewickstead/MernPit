import React from 'react';
import PropTypes from 'prop-types';

function CentralColumnLayout({
  children,
  title,
}) {
  return (
    <div className="central-column-layout-container">
      <h1>
        {title}
      </h1>
      <div className="central-column-layout-container-inner">
        <form>
          {children}
        </form>
      </div>
    </div>

  );
}

CentralColumnLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default CentralColumnLayout;
