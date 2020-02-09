import renderHtml from '../../infrastructure/htmlRenderer';
import generatePdf from '../../infrastructure/pdfGenerator';
import { sendEmailWithPdf } from '../../infrastructure/emailService';

async function getEmailHtml(app, req, surveyDetails) {
  const model = {
    headerUrl: `${req.hostUrl}/emailHeader.jpg`,
    clientName: `${surveyDetails.firstName} ${surveyDetails.lastName}`,
    layout: false,
  };

  return renderHtml(app, 'surveyEmailTemplate', model);
}

export default async function createAndEmailSurveyReport(app, req, surveyDetails, logger) {
  try {
    const reportHtml = await renderHtml(app, 'surveyPdfTemplate', surveyDetails);
    const reportPdfBuffer = await generatePdf(reportHtml);

    const subject = 'Plymouth Argyle Survey';
    const toEmailAddress = surveyDetails.email;
    const fileName = 'PlymouthArgyleSurvey.pdf';
    const emailHtml = await getEmailHtml(app, req, surveyDetails);

    await sendEmailWithPdf(subject, emailHtml, toEmailAddress, fileName, reportPdfBuffer, logger);
    return { error: false };
  } catch (error) {
    logger.error(`Error generating and emailing the survey for survey. Error: ${error.toString()}`);
    return { error: true };
  }
}
