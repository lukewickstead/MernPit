import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);
