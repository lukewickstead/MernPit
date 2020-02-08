import express from 'express';

import submitSurveyValidation from './surveyValidation';
import createAndEmailSurveyReport from '../domain/submitSurvey/submitSurveyReportService';

const router = express.Router();

export async function submitSurvey(req, res) {
  const validationMsg = submitSurveyValidation.validate(req.body, { abortEarly: false });
  if (validationMsg.error) {
    res.status(400).send(validationMsg.error.details.map((x) => x.message));
    return;
  }

  const result = await createAndEmailSurveyReport(req.app, req, req.body, req.logger);
  if (result.error) {
    res.status(500).send('An unexpected error occured');
    return;
  }

  res.status(200).send();
}

router.post('/', submitSurvey);

export default router;
