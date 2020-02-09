export const getSurveyDetailsFromState = (state) => {
  const { survey } = state;
  const { isBusy, ...surveyDetails } = survey;

  return surveyDetails;
};

