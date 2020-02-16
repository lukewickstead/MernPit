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
      expect(fs.readFile).toHaveBeenNthCalledWith(1, 'TEST PATH', null, expect.anything());

      expect(result).toEqual(Buffer.from('TEST RESULT'));
    });
  });

  describe('and an error occurs', () => {
    it('should throw an error', async () => {
      // Assign

      fs.readFile = jest.fn((filePath, dto, cb) => {
        cb('An Error Occured', '');
      });

      // Act
      await readFileToBuffer('TEST PATH').catch((e) => expect(e).toEqual('An Error Occured'));

      // Assert
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      expect(fs.readFile).toHaveBeenNthCalledWith(1, 'TEST PATH', null, expect.anything());
    });
  });
});
