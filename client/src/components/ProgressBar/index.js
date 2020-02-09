import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { LOCATION_PROP_TYPE } from '../../helpers/propTypeHelper';
import progressBarHelper from './progressBarHelper';

function ProgressBar({
  location,
}) {
  const { pathname } = location;
  const progressData = progressBarHelper(pathname);
  if (progressData.percent === -1) {
    return null;
  }
  const finalReached = progressData.percent >= 100;

  const styles = { width: `${progressData.percent}%` };
  const endPointClassNames = classnames(
    'progress-checkpoint',
    'progress-checkpoint-end',
    { 'progress-checkpoint-reached': finalReached },
    { 'progress-tick': finalReached },
    { 'progress-checkpoint-unreached': !finalReached },
  );

  const endTextClassNames = classnames(
    'progress-checkpoint-text',
    'progress-checkpoint-text-end',
    { 'progress-checkpoint-text-reached': finalReached },
    { 'progress-checkpoint-text-unreached': !finalReached },
  );

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-tick progress-checkpoint progress-checkpoint-reached progress-checkpoint-start" />
        <span className="progress-checkpoint-text progress-checkpoint-text-reached progress-checkpoint-text-start">
          Start
        </span>

        <div className={endPointClassNames} />
        <span className={endTextClassNames}>Complete</span>
        <div className="progress-bar-fill" style={styles} />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  location: LOCATION_PROP_TYPE.isRequired,
};

export default withRouter((ProgressBar));
