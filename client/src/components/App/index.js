import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import { STORE_PROP_TYPE, HISTORY_PROP_TYPE } from '../../helpers/propTypeHelper';
import ExistingSupporter from '../../containers/ExistingSupporter';

function App({
  store,
  history,
}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ExistingSupporter} />
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
