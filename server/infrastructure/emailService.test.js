import sgMail from '@sendgrid/mail';
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

  it('should generate the client email', async () => {
    // Assign
    const logger = mockLogger();

    // Act
    await sendEmailWithPdf(stubbedSubject, stubbedEmailHtml, stubbedToAddress, stubbedAttachmentFileName, stubbedAttachmentBuffer, logger);

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

    expect(logger.info).toHaveBeenCalledTimes(2);
    expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${stubbedSubject}`);
    expect(logger.info).toHaveBeenNthCalledWith(2, `Sent Email: ${stubbedSubject}`);
  });

  describe('and an error occurs sending the email', () => {
    it('the error should be logged', async () => {
      // Assign
      const logger = mockLogger();
      sgMail.send.mockImplementation(() => Promise.reject(new Error('TEST ERROR')));

      // Act
      await expect(sendEmailWithPdf(
        stubbedSubject,
        stubbedEmailHtml,
        stubbedToAddress,
        stubbedAttachmentFileName,
        stubbedAttachmentBuffer,
        logger,
      )).rejects.toThrow(/TEST ERROR/);

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${stubbedSubject}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenNthCalledWith(1, `Error sending ${stubbedSubject} email with send grid. Error: TEST ERROR`);
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
    expect(result).toEqual(expectedResult);
  });
});

describe('when calling createAttachment', () => {
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
    expect(result).toEqual(expectedResult);
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
    await sendEmailWithAttachments(stubbedSubject, stubbedEmailHtml, stubbedToAddress, logger, stubbedAttachments);

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

    expect(logger.info).toHaveBeenCalledTimes(2);
    expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${stubbedSubject}`);
    expect(logger.info).toHaveBeenNthCalledWith(2, `Sent Email: ${stubbedSubject}`);
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
      await expect(sendEmailWithAttachments(
        stubbedSubject,
        stubbedEmailHtml,
        stubbedToAddress,
        logger,
        stubbedAttachments,
      )).rejects.toThrow(new Error('TEST ERROR'));

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${stubbedSubject}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenNthCalledWith(1, `Error sending ${stubbedSubject} email with send grid. Error: TEST ERROR`);
    });
  });
});
