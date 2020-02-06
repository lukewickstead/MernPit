import { expect } from 'chai';

import surveyReducer from './surveyReducer';
import { putExistingSupporterIntoStateAction } from '../actions/surveyActions';

describe('applicantReducer ', () => {
  it('should return the initial state', () => {
    expect(surveyReducer(undefined, {})).deep.equal({
      email: '',
      existingSupporter: '',
      firstName: '',
      lastName: '',
      mobilePhoneNumber: '',
      officePhoneNumber: '',
    });
  });

  it('should reduce PUT__EXISTING_SUPPORTER_INTO_STATE', () => {
    expect(surveyReducer({}, putExistingSupporterIntoStateAction(
      'Test Is Supporter',
    ))).deep.equal({
      isExistingSupporter: 'Test Is Supporter',
    });
  });
});
