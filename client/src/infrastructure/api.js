import axios from 'axios';

const APPLICATION_JSON_HEADERS = { headers: { 'Content-Type': 'application/json' } };

export function postSurvey(submitSurveyDetails) {
  return axios.post('/api/submitSurvey/', submitSurveyDetails, APPLICATION_JSON_HEADERS);
}
