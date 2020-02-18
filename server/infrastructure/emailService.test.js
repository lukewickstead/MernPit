import sgMail from '@sendgrid/mail';
import { mockLogger } from '../testHelpers/mockHelpers';

import {
  sendEmailWithPdf,
  createPdfAttachment,
  sendEmailWithAttachments,
  createAttachment,
} from './emailService';

jest.mock('@sendgrid/mail');

const SENDGRID_API_KEY = 'SENDGRID_API_KEY';
const SENDGRID_FROM_EMAIL_ADDRESS = 'SENDGRID_FROM_EMAIL_ADDRESS';
const STUBBED_EMAIL_ATTACHMENTS = 'STUBBED_EMAIL_ATTACHMENTS';
const STUBBED_EMAIL_ATTACHMENT_BUFFER = Buffer.from('XXX');
const STUBBED_EMAIL_ATTACHMENT_FILE_NAME = 'STUBBED_EMAIL_ATTACHMENT_FILE_NAME';
const STUBBED_EMAIL_HTML = 'STUBBED_EMAIL_HTML';
const STUBBED_EMAIL_SUBJECT = 'STUBBED_EMAIL_SUBJECT';
const STUBBED_EMAIL_TO_ADDRESS = 'STUBBED_EMAIL_TO_ADDRESS';
const STUBBED_ERROR = 'STUBBED_ERROR';

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
  const expectedEmailDetails = {
    to: STUBBED_EMAIL_TO_ADDRESS,
    from: SENDGRID_FROM_EMAIL_ADDRESS,
    subject: STUBBED_EMAIL_SUBJECT,
    html: STUBBED_EMAIL_HTML,
    attachments: [
      {
        type: 'application/pdf',
        disposition: 'attachment',
        content: STUBBED_EMAIL_ATTACHMENT_BUFFER.toString('base64'),
        filename: STUBBED_EMAIL_ATTACHMENT_FILE_NAME,
      },
    ],
  };

  it('should generate the client email', async () => {
    // Assign
    const logger = mockLogger();

    // Act
    await sendEmailWithPdf(
      STUBBED_EMAIL_SUBJECT,
      STUBBED_EMAIL_HTML,
      STUBBED_EMAIL_TO_ADDRESS,
      STUBBED_EMAIL_ATTACHMENT_FILE_NAME,
      STUBBED_EMAIL_ATTACHMENT_BUFFER,
      logger,
    );

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

    expect(logger.info).toHaveBeenCalledTimes(2);
    expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${STUBBED_EMAIL_SUBJECT}`);
    expect(logger.info).toHaveBeenNthCalledWith(2, `Sent Email: ${STUBBED_EMAIL_SUBJECT}`);
  });

  describe('and an error occurs sending the email', () => {
    it('the error should be logged', async () => {
      // Assign
      const logger = mockLogger();
      sgMail.send.mockImplementation(() => Promise.reject(new Error(STUBBED_ERROR)));

      // Act
      await expect(sendEmailWithPdf(
        STUBBED_EMAIL_SUBJECT,
        STUBBED_EMAIL_HTML,
        STUBBED_EMAIL_TO_ADDRESS,
        STUBBED_EMAIL_ATTACHMENT_FILE_NAME,
        STUBBED_EMAIL_ATTACHMENT_BUFFER,
        logger,
      )).rejects.toThrow(/STUBBED_ERROR/);

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${STUBBED_EMAIL_SUBJECT}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenNthCalledWith(1, `Error sending ${STUBBED_EMAIL_SUBJECT} email with send grid. Error: ${STUBBED_ERROR}`);
    });
  });
});

describe('when calling createPdfAttachment', () => {
  it('can create an attachment record', () => {
    // Assign
    const expectedResult = {
      type: 'application/pdf',
      disposition: 'attachment',
      content: STUBBED_EMAIL_ATTACHMENT_BUFFER.toString('base64'),
      filename: STUBBED_EMAIL_ATTACHMENT_FILE_NAME,
    };

    // Act
    const result = createPdfAttachment(STUBBED_EMAIL_ATTACHMENT_BUFFER, STUBBED_EMAIL_ATTACHMENT_FILE_NAME);
    expect(result).toEqual(expectedResult);
  });
});

describe('when calling createAttachment', () => {
  it('can create an attachment record', () => {
    // Assign
    const expectedResult = {
      type: 'application/foo',
      disposition: 'attachment',
      content: STUBBED_EMAIL_ATTACHMENT_BUFFER.toString('base64'),
      filename: STUBBED_EMAIL_ATTACHMENT_FILE_NAME,
    };

    // Act
    const result = createAttachment(STUBBED_EMAIL_ATTACHMENT_BUFFER, STUBBED_EMAIL_ATTACHMENT_FILE_NAME, expectedResult.type);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});

describe('when calling sendEmailWithAttachments', () => {
  it('should generate the client email', async () => {
    // Assign
    const logger = mockLogger();

    const expectedEmailDetails = {
      to: STUBBED_EMAIL_TO_ADDRESS,
      from: SENDGRID_FROM_EMAIL_ADDRESS,
      subject: STUBBED_EMAIL_SUBJECT,
      html: STUBBED_EMAIL_HTML,
      attachments: STUBBED_EMAIL_ATTACHMENTS,
    };

    // Act
    await sendEmailWithAttachments(STUBBED_EMAIL_SUBJECT, STUBBED_EMAIL_HTML, STUBBED_EMAIL_TO_ADDRESS, logger, STUBBED_EMAIL_ATTACHMENTS);

    // Assert
    expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
    expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

    expect(logger.info).toHaveBeenCalledTimes(2);
    expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${STUBBED_EMAIL_SUBJECT}`);
    expect(logger.info).toHaveBeenNthCalledWith(2, `Sent Email: ${STUBBED_EMAIL_SUBJECT}`);
  });

  describe('and an error occurs sending the email', () => {
    it('the error should be logged', async () => {
      // Assign
      const logger = mockLogger();

      const expectedEmailDetails = {
        to: STUBBED_EMAIL_TO_ADDRESS,
        from: SENDGRID_FROM_EMAIL_ADDRESS,
        subject: STUBBED_EMAIL_SUBJECT,
        html: STUBBED_EMAIL_HTML,
        attachments: STUBBED_EMAIL_ATTACHMENTS,
      };

      sgMail.send.mockImplementation(() => Promise.reject(new Error(STUBBED_ERROR)));

      // Act
      await expect(sendEmailWithAttachments(
        STUBBED_EMAIL_SUBJECT,
        STUBBED_EMAIL_HTML,
        STUBBED_EMAIL_TO_ADDRESS,
        logger,
        STUBBED_EMAIL_ATTACHMENTS,
      )).rejects.toThrow(new Error(STUBBED_ERROR));

      // Assert
      expect(sgMail.setApiKey).toHaveBeenCalledTimes(1);
      expect(sgMail.setApiKey).toHaveBeenNthCalledWith(1, SENDGRID_API_KEY);

      expect(sgMail.send).toHaveBeenCalledTimes(1);
      expect(sgMail.send).toHaveBeenNthCalledWith(1, expectedEmailDetails);

      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenNthCalledWith(1, `Sending Email: ${STUBBED_EMAIL_SUBJECT}`);

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenNthCalledWith(1, `Error sending ${STUBBED_EMAIL_SUBJECT} email with send grid. Error: ${STUBBED_ERROR}`);
    });
  });
});
