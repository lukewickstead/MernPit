import puppeteer from 'puppeteer';

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
  const stubbedHtml = 'TEST HTML';
  const stubbedBuffer = 'TEST BUFFER';

  it('should resolve with a success', async () => {
    // Assign
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
    expect(result).toEqual(stubbedBuffer);

    expect(puppeteer.launch).toHaveBeenCalledTimes(1);
    expect(puppeteer.launch).toHaveBeenNthCalledWith(1, { headless: true });

    expect(newPageMock).toHaveBeenCalledTimes(1);

    expect(waitForNavigationMock).toHaveBeenCalledTimes(1);
    expect(waitForNavigationMock).toHaveBeenNthCalledWith(1, { waitUntil: 'load' });

    expect(setContentMock).toHaveBeenCalledTimes(1);
    expect(setContentMock).toHaveBeenNthCalledWith(1, stubbedHtml, { waitUntil: 'load' });

    expect(pdfMock).toHaveBeenCalledTimes(1);
    expect(pdfMock).toHaveBeenNthCalledWith(1, expectedPdfConfigPortrait);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it('should resolve with a success for landscape', async () => {
    // Assign
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
    expect(result).toEqual(stubbedBuffer);

    expect(puppeteer.launch).toHaveBeenCalledTimes(1);
    expect(puppeteer.launch).toHaveBeenNthCalledWith(1, { headless: true });

    expect(newPageMock).toHaveBeenCalledTimes(1);

    expect(waitForNavigationMock).toHaveBeenCalledTimes(1);
    expect(waitForNavigationMock).toHaveBeenNthCalledWith(1, { waitUntil: 'load' });

    expect(setContentMock).toHaveBeenCalledTimes(1);
    expect(setContentMock).toHaveBeenNthCalledWith(1, stubbedHtml, { waitUntil: 'load' });

    expect(pdfMock).toHaveBeenCalledTimes(1);
    expect(pdfMock).toHaveBeenNthCalledWith(1, expectedPdfConfigLanscape);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});
