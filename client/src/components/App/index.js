import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import ApplicantEmail from '../../containers/ApplicantEmail';
import ApplicantName from '../../containers/ApplicantName';
import ApplicantPhoneNumber from '../../containers/ApplicantPhoneNumber';
import ExistingSupporter from '../../containers/ExistingSupporter';
import { STORE_PROP_TYPE, HISTORY_PROP_TYPE } from '../../helpers/propTypeHelper';

import {
  URL__EMAIL,
  URL__EXISTING_SUPPORTER,
  URL__NAME,
  URL__PHONE_NUMBERS,
} from '../../constants/urlConstants';

function App({
  store,
  history,
}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={URL__EXISTING_SUPPORTER} component={ExistingSupporter} />
          <Route exact path={URL__NAME} component={ApplicantName} />
          <Route exact path={URL__PHONE_NUMBERS} component={ApplicantPhoneNumber} />
          <Route exact path={URL__EMAIL} component={ApplicantEmail} />
        </Switch>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: STORE_PROP_TYPE.isRequired,
  history: HISTORY_PROP_TYPE.isRequired,
};

export default App;
