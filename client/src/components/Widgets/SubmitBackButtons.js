import React from 'react';
import PropTypes from 'prop-types';

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
  backId: PropTypes.string.isRequired,
  backTitle: PropTypes.string,
  forwardId: PropTypes.string.isRequired,
  forwardTitle: PropTypes.string,
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitBackButtons;
