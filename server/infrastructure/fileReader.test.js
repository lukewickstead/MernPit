import { expect as chaiExpect } from 'chai';

import fs from 'fs';
import { readFileToBuffer } from './fileReader';

jest.mock('fs');

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('when calling readFileToBuffer', () => {
  describe('and no error occurs', () => {
    it('should return the correct file as a buffer', async () => {
      // Assign
      fs.readFile = jest.fn((filePath, dto, cb) => {
        cb('', 'TEST RESULT');
      });

      // Act
      const result = await readFileToBuffer('TEST PATH');

      // Assert
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      chaiExpect(fs.readFile.mock.calls[0][0]).to.equal('TEST PATH');
      chaiExpect(result).to.deep.equal(Buffer.from('TEST RESULT'));
    });
  });

  describe('and an error occurs', () => {
    it('should throw an error', async () => {
      // Assign

      fs.readFile = jest.fn((filePath, dto, cb) => {
        cb('An Error Occured', '');
      });

      // Act
      try {
        await readFileToBuffer('TEST PATH');
      } catch (error) {
        expect(error).toEqual('An Error Occured');
      }

      // Assert
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      chaiExpect(fs.readFile.mock.calls[0][0]).to.equal('TEST PATH');
    });
  });
});
