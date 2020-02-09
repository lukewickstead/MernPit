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
