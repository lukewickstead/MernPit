import { expect as chaiExpect } from 'chai';

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
  const stubbedeEmailHtml = 'TEST REPORT HTML';
  const stubbedReportPdfBuffer = 'TEST REPORT PDF BUFFER';
  const stubbedReq = { hostUrl: 'TEST HOST URL' };
  const stubbedSurveyDetails = { email: 'TEST EMAIL' };

  it('should generate a pdf and email it to the client', async () => {
    // Assign
    const mockedLogger = mockLogger();

    const expectedRenderEmailHtmlViewModel = {
      headerUrl: `${stubbedReq.hostUrl}/emailHeader.jpg`,
      clientName: `${stubbedSurveyDetails.firstName} ${stubbedSurveyDetails.lastName}`,
      layout: false,
    };

    renderHtml.mockImplementationOnce(() => Promise.resolve(stubbedReportHtml));
    renderHtml.mockImplementationOnce(() => Promise.resolve(stubbedeEmailHtml));
    generatePdf.mockImplementation(() => Promise.resolve(stubbedReportPdfBuffer));

    // Act
    const result = await createAndEmailSurveyReport(stubbedApp, stubbedReq, stubbedSurveyDetails, mockedLogger);
    chaiExpect(result).to.deep.equal({ error: false });

    // Assert
    expect(renderHtml).toHaveBeenCalledTimes(2);
    chaiExpect(renderHtml.mock.calls[0][0]).to.equal(stubbedApp);
    chaiExpect(renderHtml.mock.calls[0][1]).to.equal('surveyPdfTemplate');
    chaiExpect(renderHtml.mock.calls[0][2]).to.deep.equal(stubbedSurveyDetails);
    chaiExpect(renderHtml.mock.calls[1][0]).to.equal(stubbedApp);
    chaiExpect(renderHtml.mock.calls[1][1]).to.equal('surveyEmailTemplate');
    chaiExpect(renderHtml.mock.calls[1][2]).to.deep.equal(expectedRenderEmailHtmlViewModel);

    expect(generatePdf).toHaveBeenCalledTimes(1);
    chaiExpect(generatePdf.mock.calls[0][0]).to.equal(stubbedReportHtml);

    expect(sendEmailWithPdf).toHaveBeenCalledTimes(1);
    chaiExpect(sendEmailWithPdf.mock.calls[0][0]).to.equal('Plymouth Argyle Survey');
    chaiExpect(sendEmailWithPdf.mock.calls[0][1]).to.equal(stubbedeEmailHtml);
    chaiExpect(sendEmailWithPdf.mock.calls[0][2]).to.equal(stubbedSurveyDetails.email);
    chaiExpect(sendEmailWithPdf.mock.calls[0][3]).to.equal('PlymouthArgyleSurvey.pdf');
    chaiExpect(sendEmailWithPdf.mock.calls[0][4]).to.equal(stubbedReportPdfBuffer);
    chaiExpect(sendEmailWithPdf.mock.calls[0][5]).to.equal(mockedLogger);

    expect(mockedLogger.error).toHaveBeenCalledTimes(0);
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
      chaiExpect(result).to.deep.equal({ error: true });

      // Assert
      expect(renderHtml).toHaveBeenCalledTimes(1);
      chaiExpect(renderHtml.mock.calls[0][0]).to.equal(stubbedApp);
      chaiExpect(renderHtml.mock.calls[0][1]).to.equal('surveyPdfTemplate');
      chaiExpect(renderHtml.mock.calls[0][2]).to.deep.equal(stubbedSurveyDetails);

      expect(generatePdf).toHaveBeenCalledTimes(0);
      expect(sendEmailWithPdf).toHaveBeenCalledTimes(0);
      expect(mockedLogger.error).toHaveBeenCalledTimes(1);

      chaiExpect(mockedLogger.error.mock.calls[0][0]).to.deep.equal(expectedLogError);
    });
  });
});
