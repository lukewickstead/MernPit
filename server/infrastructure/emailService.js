import sgMail from '@sendgrid/mail';

function sendEmail(msg, logger) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  logger.info(`Sending Email: ${msg.subject}`);
  return sgMail.send(msg)
    .then(() => {
      logger.info(`Sent Email: ${msg.subject}`);
    })
    .catch((error) => {
      logger.error(`Error sending ${msg.subject} email with send grid. ${error.toString()}`);
      throw error;
    });
}

export function createAttachment(buffer, fileName, mimeType) {
  return {
    type: mimeType,
    disposition: 'attachment',
    content: buffer.toString('base64'),
    filename: fileName,
  };
}

export function createPdfAttachment(buffer, fileName) {
  return createAttachment(buffer, fileName, 'application/pdf');
}

export function sendEmailWithAttachments(subject, emailHtml, toAddress, logger, attachments) {
  const msg = {
    subject,
    to: toAddress,
    html: emailHtml,
    from: process.env.SENDGRID_FROM_EMAIL_ADDRESS,
    attachments,
  };

  return sendEmail(msg, logger);
}

export function sendEmailWithPdf(subject, emailHtml, toAddress, attachmentFileName, attachmentBuffer, logger) {
  const msg = {
    subject,
    to: toAddress,
    html: emailHtml,
    from: process.env.SENDGRID_FROM_EMAIL_ADDRESS,
    attachments: [createPdfAttachment(attachmentBuffer, attachmentFileName)],
  };

  return sendEmail(msg, logger);
}
