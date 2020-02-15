import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CentralColumnLayout from '../../components/Layouts/CentralColumnLayout';
import MatchesWatchedOptions from '../../components/MatchesWatchedOptions';
import ShirtsOwnedOptions from '../../components/ShirtsOwnedOptions';
import SubmitBackButtons from '../../components/Widgets/SubmitBackButtons';
import YearsSupportingOptions from '../../components/YearsSupportingOptions';
import { NUMBER_OR_STRING_PROP_TYPE } from '../../helpers/propTypeHelper';

import {
  SUPPORTER_EXPERIENCE__BACK,
  SUPPORTER_EXPERIENCE__NEXT,
} from '../../constants/actions/surveyActionConstants';

import {
  putSupporterExperienceBackAction,
  putSupporterExperienceNextAction,
} from '../../actions/surveyActions';

class SupporterExperience extends React.Component {
  constructor(props) {
    super(props);

    const shirtsOwnedIsValid = this.isValid('howManyTenants', props.shirtsOwnedGlobal);
    const yearsSupportingIsValid = this.isValid('yearsManaging', props.yearsSupportingGlobal);
    const matchesWatchedIsValid = this.isValid('investmentPropertiesCount', props.matchesWatchedGlobal);

    this.state = {
      matchesWatched: props.matchesWatchedGlobal,
      matchesWatchedIsInvalid: !matchesWatchedIsValid,
      matchesWatchedIsVisited: false,
      shirtsOwned: props.shirtsOwnedGlobal,
      shirtsOwnedIsInvalid: !shirtsOwnedIsValid,
      shirtsOwnedIsVisited: false,
      yearsSupporting: props.yearsSupportingGlobal,
      yearsSupportingIsInvalid: !yearsSupportingIsValid,
      yearsSupportingIsVisited: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValid = this.isValid(name, value);
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: !isValid,
      },
    );
  }

  isValid = (name, value) => value.length > 0;

  handleSubmit = (event) => {
    const { putSupporterExperienceNextActionHandler } = this.props;
    const {
      yearsSupporting,
      yearsSupportingIsInvalid,
      matchesWatched,
      matchesWatchedIsInvalid,
      shirtsOwned,
      shirtsOwnedIsInvalid,
    } = this.state;

    if (yearsSupportingIsInvalid || matchesWatchedIsInvalid || shirtsOwnedIsInvalid) {
      this.setState({
        yearsSupportingIsVisited: true,
        matchesWatchedIsVisited: true,
        shirtsOwnedIsVisited: true,
      });
    } else {
      putSupporterExperienceNextActionHandler(yearsSupporting, matchesWatched, shirtsOwned);
      event.preventDefault();
    }
  }

  handleBack = (event) => {
    const { putSupporterExperienceBackActionHandler } = this.props;
    putSupporterExperienceBackActionHandler();
    event.preventDefault();
  }

  render() {
    const {
      yearsSupporting,
      yearsSupportingIsInvalid,
      yearsSupportingIsVisited,
      matchesWatched,
      matchesWatchedIsInvalid,
      matchesWatchedIsVisited,
      shirtsOwned,
      shirtsOwnedIsInvalid,
      shirtsOwnedIsVisited,
    } = this.state;

    return (
      <CentralColumnLayout title="What is your level of experience?">
        <YearsSupportingOptions
          handleInputChange={this.handleInputChange}
          value={yearsSupporting}
          isInvalid={yearsSupportingIsInvalid}
          isVisited={yearsSupportingIsVisited}
        />

        <MatchesWatchedOptions
          handleInputChange={this.handleInputChange}
          value={matchesWatched}
          isInvalid={matchesWatchedIsInvalid}
          isVisited={matchesWatchedIsVisited}
        />

        <ShirtsOwnedOptions
          handleInputChange={this.handleInputChange}
          value={shirtsOwned}
          isInvalid={shirtsOwnedIsInvalid}
          isVisited={shirtsOwnedIsVisited}
        />

        <SubmitBackButtons
          handleSubmit={this.handleSubmit}
          handleBack={this.handleBack}
          backId={SUPPORTER_EXPERIENCE__BACK}
          forwardId={SUPPORTER_EXPERIENCE__NEXT}
        />
      </CentralColumnLayout>
    );
  }
}

SupporterExperience.propTypes = {
  putSupporterExperienceBackActionHandler: PropTypes.func.isRequired,
  putSupporterExperienceNextActionHandler: PropTypes.func.isRequired,
  yearsSupportingGlobal: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  matchesWatchedGlobal: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  shirtsOwnedGlobal: NUMBER_OR_STRING_PROP_TYPE.isRequired,
};

const mapStateToProps = (state) => ({
  yearsSupportingGlobal: state.survey.yearsSupporting,
  matchesWatchedGlobal: state.survey.matchesWatched,
  shirtsOwnedGlobal: state.survey.shirtsOwned,
});

const mapDispatchToProps = (dispatch) => ({
  putSupporterExperienceBackActionHandler: () => dispatch(putSupporterExperienceBackAction()),
  putSupporterExperienceNextActionHandler: (
    yearsSupporting,
    matchesWatched,
    shirtsOwned,
  ) => {
    dispatch(putSupporterExperienceNextAction(
      yearsSupporting,
      matchesWatched,
      shirtsOwned,
    ));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SupporterExperience);
