import createAndEmailSurveyReport from './submitSurveyReportService';
import generatePdf from '../../infrastructure/pdfGenerator';
import renderHtml from '../../infrastructure/htmlRenderer';
import { mockLogger } from '../../testHelpers/mockHelpers';
import { sendEmailWithPdf } from '../../infrastructure/emailService';

jest.mock('../../infrastructure/htmlRenderer');
jest.mock('../../infrastructure/pdfGenerator');
jest.mock('../../infrastructure/emailService');

beforeEach(() => {
  renderHtml.mockClear();
  generatePdf.mockClear();
  sendEmailWithPdf.mockClear();

  process.env = {
  };

  delete process.env.NODE_ENV;
});

describe('when calling createAndEmailSurveyReport', () => {
  const stubbedApp = 'TEST APP';
  const stubbedReportHtml = 'TEST REPORT HTML';
  const stubbedReportPdfBuffer = 'TEST REPORT PDF BUFFER';
  const stubbedReq = {};
  const stubbedSurveyDetails = { email: 'TEST EMAIL' };
  const stubbedeEmailHtml = 'TEST REPORT HTML';

  it('should generate a pdf and email it to the client', async () => {
    // Assign
    const mockedLogger = mockLogger();

    const expectedRenderEmailHtmlViewModel = {
      clientName: `${stubbedSurveyDetails.firstName} ${stubbedSurveyDetails.lastName}`,
    };

    renderHtml.mockImplementationOnce(() => Promise.resolve(stubbedReportHtml));
    renderHtml.mockImplementationOnce(() => Promise.resolve(stubbedeEmailHtml));
    generatePdf.mockImplementation(() => Promise.resolve(stubbedReportPdfBuffer));

    // Act
    const result = await createAndEmailSurveyReport(stubbedApp, stubbedReq, stubbedSurveyDetails, mockedLogger);
    expect(result).toEqual({ error: false });

    // Assert
    expect(renderHtml).toHaveBeenCalledTimes(2);
    expect(renderHtml).toHaveBeenNthCalledWith(1, stubbedApp, 'surveyPdfTemplate', stubbedSurveyDetails);
    expect(renderHtml).toHaveBeenNthCalledWith(2, stubbedApp, 'surveyEmailTemplate', expectedRenderEmailHtmlViewModel);

    expect(generatePdf).toHaveBeenCalledTimes(1);
    expect(generatePdf).toHaveBeenNthCalledWith(1, stubbedReportHtml);

    expect(sendEmailWithPdf).toHaveBeenCalledTimes(1);
    expect(sendEmailWithPdf).toHaveBeenNthCalledWith(
      1,
      'Plymouth Argyle Survey',
      stubbedeEmailHtml,
      stubbedSurveyDetails.email,
      'PlymouthArgyleSurvey.pdf',
      stubbedReportPdfBuffer,
      mockedLogger,
    );

    expect(mockedLogger.error).not.toHaveBeenCalled();
  });

  describe('and an error occurs', () => {
    it('should report the error', async () => {
      // Assign
      const mockedLogger = mockLogger();
      const stubbedError = 'TEST ERROR';
      const expectedLogError = 'Error generating and emailing the survey for survey. Error: TEST ERROR';

      renderHtml.mockImplementation(() => Promise.reject(stubbedError));

      // Act
      const result = await createAndEmailSurveyReport(stubbedApp, stubbedReq, stubbedSurveyDetails, mockedLogger);
      expect(result).toEqual({ error: true });

      // Assert
      expect(renderHtml).toHaveBeenCalledTimes(1);
      expect(renderHtml).toHaveBeenNthCalledWith(1, stubbedApp, 'surveyPdfTemplate', stubbedSurveyDetails);

      expect(generatePdf).not.toHaveBeenCalled();
      expect(sendEmailWithPdf).not.toHaveBeenCalled();

      expect(mockedLogger.error).toHaveBeenCalledTimes(1);
      expect(mockedLogger.error).toHaveBeenNthCalledWith(1, expectedLogError);
    });
  });
});
