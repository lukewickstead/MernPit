import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import survey from './surveyReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  survey,
});
