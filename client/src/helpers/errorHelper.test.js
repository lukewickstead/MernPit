import getErrorMessageFromServerResponseError from './errorHelper';

describe('when calling getErrorMessageFromServerResponseError', () => {
  describe('with no response field', () => {
    it('should return the actual error', () => {
      const result = getErrorMessageFromServerResponseError('ERROR');
      expect(result).toEqual('ERROR');
    });
  });

  describe('with no response.data field', () => {
    it('should return response field', () => {
      const result = getErrorMessageFromServerResponseError({ response: 'ERROR' });
      expect(result).toEqual('ERROR');
    });
  });

  describe('with the no response.data field being a string', () => {
    it('should return response.data field', () => {
      const result = getErrorMessageFromServerResponseError({ response: { data: 'ERROR' } });
      expect(result).toEqual('ERROR');
    });
  });

  describe('with the no response.data field being an array', () => {
    it('should return response.data values', () => {
      const result = getErrorMessageFromServerResponseError({ response: { data: ['ERROR1', 'ERROR2', 'ERROR3'] } });
      expect(result).toEqual('ERROR1, ERROR2, ERROR3');
    });
  });
});
