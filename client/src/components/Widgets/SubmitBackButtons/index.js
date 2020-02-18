import React from 'react';
import PropTypes from 'prop-types';

/**
 * Submit and Back Button
 */
function SubmitBackButtons(
  {
    backId,
    backTitle,
    forwardId,
    forwardTitle,
    handleBack,
    handleSubmit,
  },
) {
  return (
    <div className="button-wrapper">
      <button id={backId} className="back" type="button" onClick={handleBack}>{backTitle}</button>
      <button id={forwardId} className="submit" type="button" onClick={handleSubmit}>{forwardTitle}</button>
    </div>
  );
}

SubmitBackButtons.defaultProps = {
  backTitle: 'Back',
  forwardTitle: 'Continue',
};

SubmitBackButtons.propTypes = {
  /** The id of the back button */
  backId: PropTypes.string.isRequired,
  /** The button title of the back button */
  backTitle: PropTypes.string,
  /** The id of the forward button */
  forwardId: PropTypes.string.isRequired,
  /** The button title of the forward button */
  forwardTitle: PropTypes.string,
  /** The back button action handler */
  handleBack: PropTypes.func.isRequired,
  /** The forward button action handler */
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitBackButtons;
