import sgMail from '@sendgrid/mail';
import { expect as chaiExpect } from 'chai';
import { mockLogger } from '../testHelpers/mockHelpers';

import {
  sendEmailWithPdf,
  createPdfAttachment,
  sendEmailWithAttachments,
  createAttachment,
} from './emailService';

jest.mock('@sendgrid/mail');

const SENDGRID_API_KEY = 'TEST_SENDGRID_API_KEY';
const SENDGRID_FROM_EMAIL_ADDRESS = 'TEST_SENDGRID_FROM_EMAIL_ADDRESS';

beforeEach(() => {
  process.env = {
    SENDGRID_FROM_EMAIL_ADDRESS,
    SENDGRID_API_KEY,
  };

  delete process.env.NODE_ENV;

  sgMail.send.mockResolvedValue({});
});

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('when calling sendEmailWithPdf', () => {
  it('should generate the client email', async () => {
    // Assign
    const logger = mockLogger();

    const stubbedSubject = 'TEST SUBJECT';
    const stubbedEmailHtml = 'TEST EMAIL HTML';
    const stubbedToAddress = 'TEST TO ADDESS';
    const stubbedAttachmentFileName = 'TEST ATTACHMENT FILE NAME';
    const stubbedAttachmentBuffer = Buffer.from('XXX');

    const expectedEmailDetails = {
      to: stubbedToAddress,
      from: SENDGRID_FROM_EMAIL_ADDRESS,
      subject: stubbedSubject,
      html: stubbedEmailHtml,
      attachments: [
        {
          type: 'application/pdf',
          disposition: 'attachment',
          content: stubbedAttachmentBuffer.toString('base64'),
          filename: stubbedAttachmentFileName,
        },
      ],
    };

    // Act
    const resultPromise = sendEmailWithPdf(stubbedSubject, stubbedEmailHtml, stubbedToAddress, stubbedAttachmentFileName, stubbedAttachmentBuffer, logger);

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    chaiExpect(sgMail.setApiKey.mock.calls[0][0]).to.equal(SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    chaiExpect(sgMail.send.mock.calls[0][0]).to.deep.equal(expectedEmailDetails);

    await resultPromise;
    expect(logger.info).toHaveBeenCalledTimes(2);
    chaiExpect(logger.info.mock.calls[0][0]).to.equal(`Sending Email: ${stubbedSubject}`);
    chaiExpect(logger.info.mock.calls[1][0]).to.equal(`Sent Email: ${stubbedSubject}`);
  });

  describe('and an error occurs sending the email', () => {
    it('the error should be logged', async () => {
      // Assign
      const logger = mockLogger();

      const stubbedSubject = 'TEST SUBJECT';
      const stubbedEmailHtml = 'TEST EMAIL HTML';
      const stubbedToAddress = 'TEST TO ADDESS';
      const stubbedAttachmentFileName = 'TEST ATTACHMENT FILE NAME';
      const stubbedAttachmentBuffer = Buffer.from('XXX');

      const expectedEmailDetails = {
        to: stubbedToAddress,
        from: SENDGRID_FROM_EMAIL_ADDRESS,
        subject: stubbedSubject,
        html: stubbedEmailHtml,
        attachments: [
          {
            type: 'application/pdf',
            disposition: 'attachment',
            content: stubbedAttachmentBuffer.toString('base64'),
            filename: stubbedAttachmentFileName,
          },
        ],
      };

      sgMail.send.mockImplementation(() => Promise.reject(new Error('TEST ERROR')));

      // Act
      const resultPromise = sendEmailWithPdf(
        stubbedSubject,
        stubbedEmailHtml,
        stubbedToAddress,
        stubbedAttachmentFileName,
        stubbedAttachmentBuffer,
        logger,
      ).catch((e) => expect(e).toEqual(new Error('TEST ERROR')));

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      chaiExpect(sgMail.setApiKey.mock.calls[0][0]).to.equal(SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      chaiExpect(sgMail.send.mock.calls[0][0]).to.deep.equal(expectedEmailDetails);

      await resultPromise;
      expect(logger.info).toHaveBeenCalledTimes(1);
      chaiExpect(logger.info.mock.calls[0][0]).to.equal(`Sending Email: ${stubbedSubject}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      chaiExpect(logger.error.mock.calls[0][0]).to.equal(`Error sending ${stubbedSubject} email with send grid. Error: TEST ERROR`);
    });
  });
});

describe('when calling createPdfAttachment', () => {
  it('can create an attachment record', () => {
    // Assign
    const stubbedAttachmentBuffer = Buffer.from('XXX');
    const stubbedFileName = 'TEST FILE NAME';
    const expectedResult = {
      type: 'application/pdf',
      disposition: 'attachment',
      content: stubbedAttachmentBuffer.toString('base64'),
      filename: stubbedFileName,
    };

    // Act
    const result = createPdfAttachment(stubbedAttachmentBuffer, stubbedFileName);

    // Assert
    chaiExpect(result).to.deep.equal(expectedResult);
  });
});

describe('when calling createPdfAttachment', () => {
  it('can create an attachment record', () => {
    // Assign
    const stubbedAttachmentBuffer = Buffer.from('XXX');
    const stubbedFileName = 'TEST FILE NAME';
    const expectedResult = {
      type: 'application/foo',
      disposition: 'attachment',
      content: stubbedAttachmentBuffer.toString('base64'),
      filename: stubbedFileName,
    };

    // Act
    const result = createAttachment(stubbedAttachmentBuffer, stubbedFileName, expectedResult.type);

    // Assert
    chaiExpect(result).to.deep.equal(expectedResult);
  });
});

describe('when calling sendEmailWithAttachments', () => {
  it('should generate the client email', async () => {
    // Assign
    const logger = mockLogger();

    const stubbedSubject = 'TEST SUBJECT';
    const stubbedEmailHtml = 'TEST EMAIL HTML';
    const stubbedToAddress = 'TEST TO ADDESS';
    const stubbedAttachments = 'TEST ATTACHMENTS';

    const expectedEmailDetails = {
      to: stubbedToAddress,
      from: SENDGRID_FROM_EMAIL_ADDRESS,
      subject: stubbedSubject,
      html: stubbedEmailHtml,
      attachments: stubbedAttachments,
    };

    // Act
    const resultPromise = sendEmailWithAttachments(stubbedSubject, stubbedEmailHtml, stubbedToAddress, logger, stubbedAttachments);

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    chaiExpect(sgMail.setApiKey.mock.calls[0][0]).to.equal(SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    chaiExpect(sgMail.send.mock.calls[0][0]).to.deep.equal(expectedEmailDetails);

    await resultPromise;
    expect(logger.info).toHaveBeenCalledTimes(2);
    chaiExpect(logger.info.mock.calls[0][0]).to.equal(`Sending Email: ${stubbedSubject}`);
    chaiExpect(logger.info.mock.calls[1][0]).to.equal(`Sent Email: ${stubbedSubject}`);
  });

  describe('and an error occurs sending the email', () => {
    it('the error should be logged', async () => {
      // Assign
      const logger = mockLogger();

      const stubbedAttachments = 'TEST ATTACHMENTS';
      const stubbedSubject = 'TEST SUBJECT';
      const stubbedEmailHtml = 'TEST EMAIL HTML';
      const stubbedToAddress = 'TEST TO ADDESS';

      const expectedEmailDetails = {
        to: stubbedToAddress,
        from: SENDGRID_FROM_EMAIL_ADDRESS,
        subject: stubbedSubject,
        html: stubbedEmailHtml,
        attachments: stubbedAttachments,
      };

      sgMail.send.mockImplementation(() => Promise.reject(new Error('TEST ERROR')));

      // Act
      const resultPromise = sendEmailWithAttachments(
        stubbedSubject,
        stubbedEmailHtml,
        stubbedToAddress,
        logger,
        stubbedAttachments,
      ).catch((e) => expect(e).toEqual(new Error('TEST ERROR')));

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      chaiExpect(sgMail.setApiKey.mock.calls[0][0]).to.equal(SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      chaiExpect(sgMail.send.mock.calls[0][0]).to.deep.equal(expectedEmailDetails);

      await resultPromise;
      expect(logger.info).toHaveBeenCalledTimes(1);
      chaiExpect(logger.info.mock.calls[0][0]).to.equal(`Sending Email: ${stubbedSubject}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      chaiExpect(logger.error.mock.calls[0][0]).to.equal(`Error sending ${stubbedSubject} email with send grid. Error: TEST ERROR`);
    });
  });
});
