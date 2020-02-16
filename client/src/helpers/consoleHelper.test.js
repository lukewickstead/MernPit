/* eslint-disable no-global-assign */
/* eslint-disable no-console */
import { consoleLog, consoleError } from './consoleHelper';

describe('ConsoleHelpers', () => {
  const realConsole = global.console;

  beforeEach(() => {
    global.console = {
      log: jest.fn(),
      error: jest.fn(),
    };
  });

  afterEach(() => {
    global.console = realConsole;
  });

  describe('consoleLog', () => {
    it('should call console.log with the expected parameter', () => {
      consoleLog('TestLog');
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenNthCalledWith(1, 'TestLog');
    });
  });

  describe('consoleError', () => {
    it('should call console.log with the expected parameter', () => {
      consoleError('TestError');
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenNthCalledWith(1, 'TestError');
    });
  });
});
