import { mockRequest, mockResponse } from '../testHelpers/mockHelpers';
import { submitSurvey } from './submitSurveyRoute';
import submitSurveyValidation from './surveyValidation';
import createAndEmailSurveyReport from '../domain/submitSurvey/submitSurveyReportService';

jest.mock('./surveyValidation');
jest.mock('../domain/submitSurvey/submitSurveyReportService');

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('when calling submitSurvey ', () => {
  describe('and the request is valid', () => {
    it('should generate the pdf and email it to the applicant', async () => {
      // Assign
      const mockReq = mockRequest({});
      const mockRes = mockResponse();

      submitSurveyValidation.validate.mockResolvedValue({ error: undefined });
      createAndEmailSurveyReport.mockImplementation(() => Promise.resolve({ error: false }));

      // Act
      await submitSurvey(mockReq, mockRes);

      // Assert
      expect(mockRes.send).toHaveBeenCalledTimes(1);
      expect(mockRes.send).toHaveBeenNthCalledWith(1);

      expect(mockRes.status).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenNthCalledWith(1, 200);

      expect(createAndEmailSurveyReport).toHaveBeenCalledTimes(1);
      expect(createAndEmailSurveyReport).toHaveBeenNthCalledWith(1, mockReq.app, mockReq, mockReq.body, mockReq.logger);
    });

    describe('and an error is reported generating the pdf', () => {
      it('should not generate the client one and report an error', async () => {
        // Assign
        const mockReq = mockRequest({});
        const mockRes = mockResponse();

        submitSurveyValidation.validate.mockResolvedValue({ error: undefined });
        createAndEmailSurveyReport.mockImplementation(() => Promise.resolve({ error: true }));

        // Act
        await submitSurvey(mockReq, mockRes);

        // Assert
        expect(mockRes.send).toHaveBeenCalledTimes(1);
        expect(mockRes.send).toHaveBeenNthCalledWith(1, 'An unexpected error occured');

        expect(mockRes.status).toHaveBeenCalledTimes(1);
        expect(mockRes.status).toHaveBeenNthCalledWith(1, 500);

        expect(createAndEmailSurveyReport).toHaveBeenCalledTimes(1);
        expect(createAndEmailSurveyReport).toHaveBeenNthCalledWith(1, mockReq.app, mockReq, mockReq.body, mockReq.logger);
      });
    });
  });

  describe('and the request is not valid', () => {
    it('should return bad request with validation messages', async () => {
      // Assign
      const mockReq = mockRequest({});
      const mockRes = mockResponse();

      submitSurveyValidation.validate.mockReturnValue({
        error: {
          details: [
            { message: 'msg 1' },
            { message: 'msg 2' },
            { message: 'msg 3' },
          ],
        },
      });

      // Act
      await submitSurvey(mockReq, mockRes);

      // Assert
      expect(mockRes.status).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenNthCalledWith(1, 400);

      expect(mockRes.send).toHaveBeenCalledTimes(1);
      expect(mockRes.send).toHaveBeenNthCalledWith(1, ['msg 1', 'msg 2', 'msg 3']);

      expect(createAndEmailSurveyReport).not.toHaveBeenCalled();
    });
  });
});

