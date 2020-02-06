import { expect } from 'chai';
import watchSurveyAggregateSaga from './surveySaga';

describe('when calling watchSurveyAggregateSaga saga', () => {
  it('can watch for all required sagas', () => {
    const saga = watchSurveyAggregateSaga();
    expect(saga.next().value).to.deep.equal(undefined);
  });
});
