import React from 'react';
import { withRouter } from 'react-router-dom';

import { LOCATION_PROP_TYPE } from '../../helpers/propTypeHelper';
import progressBarHelper, { getTextMarkerClassNames, getPointMarkerClassNames } from './progressBarHelper';

function ProgressBar({
  location,
}) {
  const { pathname } = location;
  const progressData = progressBarHelper(pathname);
  if (progressData.percent === -1) {
    return null;
  }

  const styles = { width: `${progressData.percent}%` };
  const startTextClassNames = getTextMarkerClassNames('start', true);
  const startPointClassNames = getPointMarkerClassNames('start', true);

  const midReached = progressData.percent >= 50;
  const midTextClassNames = getTextMarkerClassNames('mid', midReached);
  const midPointClassNames = getPointMarkerClassNames('mid', midReached);

  const finalReached = progressData.percent >= 100;
  const endTextClassNames = getTextMarkerClassNames('end', finalReached);
  const endPointClassNames = getPointMarkerClassNames('end', finalReached);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className={startPointClassNames} />
        <span className={startTextClassNames}>Kick off</span>

        <div className={midPointClassNames} />
        <span className={midTextClassNames}>Half time</span>

        <div className={endPointClassNames} />
        <span className={endTextClassNames}>Full time</span>

        <div className="progress-bar-fill" style={styles} />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  location: LOCATION_PROP_TYPE.isRequired,
};

export default withRouter((ProgressBar));
