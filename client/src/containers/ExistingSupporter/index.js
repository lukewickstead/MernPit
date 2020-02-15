import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CentralColumnLayout from '../../components/Layouts/CentralColumnLayout';
import ExistingSupporterOptions from '../../components/ExistingSupporterOptions';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import { EXISTING_SUPPORTER__BACK, EXISTING_SUPPORTER__NEXT } from '../../constants/actions/surveyActionConstants';
import { putExistingSupporterBackAction, putExistingSupporterNextAction } from '../../actions/surveyActions';

class ExistingSupporter extends React.Component {
  constructor(props) {
    super(props);

    const isExistingSupporterIsValid = this.isValid(props.isExistingSupporterGlobal);

    this.state = {
      isExistingSupporter: props.isExistingSupporterGlobal,
      isExistingSupporterIsInvalid: !isExistingSupporterIsValid,
      isExistingSupporterIsVisited: false,
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
      isExistingSupporter,
      isExistingSupporterIsInvalid,
    } = this.state;
    const { putExistingSupporterNextActionHandler } = this.props;

    if (isExistingSupporterIsInvalid) {
      this.setState({
        isExistingSupporterIsVisited: true,
      });
    } else {
      putExistingSupporterNextActionHandler(isExistingSupporter);
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
      isExistingSupporter,
      isExistingSupporterIsInvalid,
      isExistingSupporterIsVisited,
    } = this.state;

    return (
      <CentralColumnLayout
        title="Are you an existing Plymouth Argyle Fan?"
      >
        <ExistingSupporterOptions
          handleInputChange={this.handleInputChange}
          value={isExistingSupporter}
          isInvalid={isExistingSupporterIsInvalid}
          isVisited={isExistingSupporterIsVisited}
        />

        <SubmitBackButtons
          handleSubmit={this.handleSubmit}
          handleBack={this.handleBack}
          backId={EXISTING_SUPPORTER__BACK}
          forwardId={EXISTING_SUPPORTER__NEXT}
        />
      </CentralColumnLayout>
    );
  }
}

ExistingSupporter.propTypes = {
  putExistingSupporterBackActionHandler: PropTypes.func.isRequired,
  isExistingSupporterGlobal: PropTypes.string.isRequired,
  putExistingSupporterNextActionHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isExistingSupporterGlobal: state.survey.isExistingSupporter,
});

const mapDispatchToProps = (dispatch) => ({
  putExistingSupporterBackActionHandler: () => dispatch(putExistingSupporterBackAction()),
  putExistingSupporterNextActionHandler: (existingSupporter) => dispatch(putExistingSupporterNextAction(existingSupporter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExistingSupporter);
