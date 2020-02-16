import { all, fork } from 'redux-saga/effects';

import watchMany from './index';
import watchSurveyAggregateSaga from './surveySaga';

describe('when calling the index route saga', () => {
  it('can watch for all required sagas', () => {
    const saga = watchMany();

    expect(saga.next().value).toEqual(
      all([
        fork(watchSurveyAggregateSaga),
      ]),
    );
  });
});
