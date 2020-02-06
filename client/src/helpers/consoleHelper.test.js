/* eslint-disable no-global-assign */
/* eslint-disable no-console */
import { expect as chaiExpect } from 'chai';
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
      chaiExpect(console.log.mock.calls[0][0]).to.equal('TestLog');
    });
  });

  describe('consoleError', () => {
    it('should call console.log with the expected parameter', () => {
      consoleError('TestError');
      expect(console.error).toHaveBeenCalledTimes(1);
      chaiExpect(console.error.mock.calls[0][0]).to.equal('TestError');
    });
  });
});
