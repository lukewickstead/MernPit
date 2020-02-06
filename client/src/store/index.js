/* eslint-disable no-underscore-dangle */
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
