import { all, fork } from 'redux-saga/effects';

import watchSurveyAggregateSaga from './surveySaga';

export default function* watchMany() {
  yield all([
    fork(watchSurveyAggregateSaga),
  ]);
}
