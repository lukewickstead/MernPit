import axios from 'axios';
import { expect as chaiExpect } from 'chai';

import { postSurvey } from './api';

jest.mock('axios');

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('When calling api', () => {
  const APPLICATION_JSON_HEADERS = { headers: { 'Content-Type': 'application/json' } };

  describe('When calling postSurvey', () => {
    it('should be called with the right arguments', () => {
      postSurvey('TEST SURVEY DETAILS');

      expect(axios.post).toHaveBeenCalledTimes(1);
      chaiExpect(axios.post.mock.calls[0][0]).to.equal('/api/submitSurvey/');
      chaiExpect(axios.post.mock.calls[0][1]).to.equal('TEST SURVEY DETAILS');
      chaiExpect(axios.post.mock.calls[0][2]).to.deep.equal(APPLICATION_JSON_HEADERS);
    });
  });
});
