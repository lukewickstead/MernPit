import puppeteer from 'puppeteer';
import { expect as chaiExpect } from 'chai';

import generatePdf from './pdfGenerator';

jest.mock('puppeteer', () => ({
  __esModule: true,
  default: {
    launch: jest.fn(),
  },
}));

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

const expectedPdfConfigPortrait = {
  format: 'A4',
  orientation: 'portrait',
  printBackground: true,
  margin: {
    left: '2cm',
    top: '0px',
    right: '2cm',
    bottom: '1cm',
  },
};

const expectedPdfConfigLanscape = {
  format: 'A4',
  orientation: 'landscape',
  printBackground: true,
  margin: {
    left: '2cm',
    top: '0px',
    right: '2cm',
    bottom: '1cm',
  },
};

describe('when calling generatePdf', () => {
  it('should resolve with a success', async () => {
    // Assign
    const stubbedHtml = 'TEST HTML';
    const stubbedBuffer = 'TEST BUFFER';
    const pdfMock = jest.fn().mockResolvedValueOnce(stubbedBuffer);
    const closeMock = jest.fn();
    const setContentMock = jest.fn();
    const waitForNavigationMock = jest.fn();

    const newPageMock = jest.fn().mockResolvedValueOnce({
      setContent: setContentMock,
      pdf: pdfMock,
      waitForNavigation: waitForNavigationMock,
    });

    puppeteer.launch.mockResolvedValueOnce({
      close: closeMock,
      newPage: newPageMock,
    });

    // Act
    const result = await generatePdf(stubbedHtml);

    // Assert
    chaiExpect(result).to.equal(stubbedBuffer);

    expect(puppeteer.launch).toHaveBeenCalledTimes(1);
    chaiExpect(puppeteer.launch.mock.calls[0][0]).to.deep.equal({ headless: true });

    expect(newPageMock).toHaveBeenCalledTimes(1);
    expect(waitForNavigationMock).toHaveBeenCalledTimes(1);
    chaiExpect(waitForNavigationMock.mock.calls[0][0]).to.deep.equal({ waitUntil: 'load' });

    expect(setContentMock).toHaveBeenCalledTimes(1);
    chaiExpect(setContentMock.mock.calls[0][0]).to.equal(stubbedHtml);
    chaiExpect(setContentMock.mock.calls[0][1]).to.deep.equal({ waitUntil: 'load' });

    expect(pdfMock).toHaveBeenCalledTimes(1);
    chaiExpect(pdfMock.mock.calls[0][0]).to.deep.equal(expectedPdfConfigPortrait);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it('should resolve with a success for landscape', async () => {
    // Assign
    const stubbedHtml = 'TEST HTML';
    const stubbedBuffer = 'TEST BUFFER';
    const pdfMock = jest.fn().mockResolvedValueOnce(stubbedBuffer);
    const closeMock = jest.fn();
    const setContentMock = jest.fn();
    const waitForNavigationMock = jest.fn();

    const newPageMock = jest.fn().mockResolvedValueOnce({
      setContent: setContentMock,
      pdf: pdfMock,
      waitForNavigation: waitForNavigationMock,
    });

    puppeteer.launch.mockResolvedValueOnce({
      close: closeMock,
      newPage: newPageMock,
    });

    // Act
    const result = await generatePdf(stubbedHtml, true);

    // Assert
    chaiExpect(result).to.equal(stubbedBuffer);

    expect(puppeteer.launch).toHaveBeenCalledTimes(1);
    chaiExpect(puppeteer.launch.mock.calls[0][0]).to.deep.equal({ headless: true });

    expect(newPageMock).toHaveBeenCalledTimes(1);
    expect(waitForNavigationMock).toHaveBeenCalledTimes(1);
    chaiExpect(waitForNavigationMock.mock.calls[0][0]).to.deep.equal({ waitUntil: 'load' });

    expect(setContentMock).toHaveBeenCalledTimes(1);
    chaiExpect(setContentMock.mock.calls[0][0]).to.equal(stubbedHtml);
    chaiExpect(setContentMock.mock.calls[0][1]).to.deep.equal({ waitUntil: 'load' });

    expect(pdfMock).toHaveBeenCalledTimes(1);
    chaiExpect(pdfMock.mock.calls[0][0]).to.deep.equal(expectedPdfConfigLanscape);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});
