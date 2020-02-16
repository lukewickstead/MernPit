import axios from 'axios';

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
      expect(axios.post).toHaveBeenNthCalledWith(1, '/api/submitSurvey/', 'TEST SURVEY DETAILS', APPLICATION_JSON_HEADERS);
    });
  });
});
