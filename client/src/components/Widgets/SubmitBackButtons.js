import React from 'react';
import PropTypes from 'prop-types';

function SubmitBackButtons(
  {
    handleSubmit,
    handleBack,
    forwardId,
    forwardTitle,
    backId,
    backTitle,
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
  forwardTitle: 'Continue',
  backTitle: 'Back',
};

SubmitBackButtons.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  forwardId: PropTypes.string.isRequired,
  forwardTitle: PropTypes.string,
  backId: PropTypes.string.isRequired,
  backTitle: PropTypes.string,
};

export default SubmitBackButtons;
