import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import Confirmation from '../Confirmation';
import Error from '../Error';
import Home from '../Home';
import ScrollToTop from '../ScrollToTop';

import Header from '../Widgets/Header';
import ProgressBar from '../Widgets/ProgressBar';

import ApplicantEmail from '../../containers/ApplicantEmail';
import ApplicantName from '../../containers/ApplicantName';
import ApplicantPhoneNumber from '../../containers/ApplicantPhoneNumber';
import ExistingSupporter from '../../containers/ExistingSupporter';
import Summary from '../../containers/Summary';
import SupporterExperience from '../../containers/SupporterExperience';

import { STORE_PROP_TYPE, HISTORY_PROP_TYPE } from '../../helpers/propTypeHelper';

import {
  URL__CONFIRMATION,
  URL__EMAIL,
  URL__ERROR,
  URL__EXISTING_SUPPORTER,
  URL__HOME,
  URL__NAME,
  URL__PHONE_NUMBERS,
  URL__SUMMARY,
  URL__SUPPORTER_EXPERIENCE,
} from '../../constants/urlConstants';

function App({
  store,
  history,
}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <Header />
          <div role="main">
            <ProgressBar />
            <Switch>
              <Route exact path={URL__HOME} component={Home} />
              <Route exact path={URL__EXISTING_SUPPORTER} component={ExistingSupporter} />
              <Route exact path={URL__NAME} component={ApplicantName} />
              <Route exact path={URL__PHONE_NUMBERS} component={ApplicantPhoneNumber} />
              <Route exact path={URL__EMAIL} component={ApplicantEmail} />
              <Route exact path={URL__SUPPORTER_EXPERIENCE} component={SupporterExperience} />
              <Route exact path={URL__SUMMARY} component={Summary} />
              <Route exact path={URL__ERROR} component={Error} />
              <Route exact path={URL__CONFIRMATION} component={Confirmation} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: STORE_PROP_TYPE.isRequired,
  history: HISTORY_PROP_TYPE.isRequired,
};

export default App;
