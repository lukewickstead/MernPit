import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExistingSupporterOptions from '../../components/ExistingSupporterOptions';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { EXISTING_SUPPORTER__BACK, EXISTING_SUPPORTER__NEXT } from '../../constants/actions/surveyActionConstants';
import { putExistingSupporterBackAction, putExistingSupporterNextAction } from '../../actions/surveyActions';

class ExistingSupporter extends React.Component {
  constructor(props) {
    super(props);

    const existingSupporterIsValid = this.isValid(props.existingSupporterGlobal);

    this.state = {
      existingSupporter: props.existingSupporterGlobal,
      existingSupporterIsInvalid: !existingSupporterIsValid,
      existingSupporterIsVisited: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValid = this.isValid(value);

    this.setState({
      [name]: value,
      [`${name}IsInvalid`]: !isValid,
    });
  }

  isValid = (value) => value.length > 1;

  handleSubmit = (event) => {
    const {
      existingSupporter,
      existingSupporterIsInvalid,
    } = this.state;
    const { putExistingSupporterNextActionHandler } = this.props;

    if (existingSupporterIsInvalid) {
      this.setState({
        existingSupporterIsVisited: true,
      });
    } else {
      putExistingSupporterNextActionHandler(existingSupporter);
      event.preventDefault();
    }
  }

  handleBack = (event) => {
    const { putExistingSupporterBackActionHandler } = this.props;
    putExistingSupporterBackActionHandler();
    event.preventDefault();
  }

  render() {
    const {
      existingSupporter,
      existingSupporterIsInvalid,
      existingSupporterIsVisited,
    } = this.state;

    return (
      <div className="central-column-layout-container">
        <h1>Are you an existing Plymouth Argyle Fan?</h1>
        <div className="central-column-layout-container-inner">
          <form>

            <ExistingSupporterOptions
              handleInputChange={this.handleInputChange}
              value={existingSupporter}
              isInvalid={existingSupporterIsInvalid}
              isVisited={existingSupporterIsVisited}
            />

            <SubmitBackButtons
              handleSubmit={this.handleSubmit}
              handleBack={this.handleBack}
              backId={EXISTING_SUPPORTER__BACK}
              forwardId={EXISTING_SUPPORTER__NEXT}
            />
          </form>
        </div>
      </div>
    );
  }
}

ExistingSupporter.propTypes = {
  putExistingSupporterBackActionHandler: PropTypes.func.isRequired,
  existingSupporterGlobal: PropTypes.string.isRequired,
  putExistingSupporterNextActionHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  existingSupporterGlobal: state.survey.existingSupporter,
});

const mapDispatchToProps = (dispatch) => ({
  putExistingSupporterBackActionHandler: () => dispatch(putExistingSupporterBackAction()),
  putExistingSupporterNextActionHandler: (existingSupporter) => dispatch(putExistingSupporterNextAction(existingSupporter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExistingSupporter);
