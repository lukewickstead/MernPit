import classnames from 'classnames';

import { WORKFLOW_ORDER } from '../../constants/urlConstants';

export default function progressBarHelper(currentUrl) {
  const currentIndex = WORKFLOW_ORDER.indexOf(currentUrl);
  if (currentIndex === -1) {
    return {
      percent: -1,
    };
  }

  const percent = Math.round(((currentIndex) / (WORKFLOW_ORDER.length - 1)) * 100);
  return {
    percent,
  };
}

export function getTextMarkerClassNames(section, isReached) {
  return classnames(
    'progress-checkpoint-text',
    `progress-checkpoint-text-${section}`,
    { 'progress-checkpoint-text-reached': isReached },
    { 'progress-checkpoint-text-unreached': !isReached },
  );
}

export function getPointMarkerClassNames(section, isReached) {
  return classnames(
    'progress-checkpoint',
    `progress-checkpoint-${section}`,
    { 'progress-checkpoint-reached': isReached },
    { 'progress-tick': isReached },
    { 'progress-checkpoint-unreached': !isReached },
  );
}
