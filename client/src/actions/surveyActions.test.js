import { expect } from 'chai';

import {
  putExistingSupporterBackAction,
  putExistingSupporterIntoStateAction,
  putExistingSupporterNextAction,
} from './surveyActions';

import {
  EXISTING_SUPPORTER__BACK,
  EXISTING_SUPPORTER__NEXT,
  PUT__EXISTING_SUPPORTER_INTO_STATE,
} from '../constants/actions/surveyActionConstants';

describe('surveyActions', () => {
  const stubbedIsExistingSupporter = 'TEST IS CURRENT SUPPORTER';

  describe('when calling putExistingSupporterBackAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterBackAction())
        .to.deep.equal({
          type: EXISTING_SUPPORTER__BACK,
        });
    });
  });

  describe('when calling putExistingSupporterNextAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterNextAction(stubbedIsExistingSupporter))
        .to.deep.equal({
          type: EXISTING_SUPPORTER__NEXT,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

  describe('when calling putExistingSupporterIntoStateAction', () => {
    it('should return the correct action type and value', () => {
      expect(putExistingSupporterIntoStateAction(stubbedIsExistingSupporter))
        .to.deep.equal({
          type: PUT__EXISTING_SUPPORTER_INTO_STATE,
          data: {
            isExistingSupporter: stubbedIsExistingSupporter,
          },
        });
    });
  });

});
