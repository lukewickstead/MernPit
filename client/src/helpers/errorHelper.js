export default function getErrorMessageFromServerResponseError(error) {
  if (!error.response) {
    return error;
  }

  if (!error.response.data) {
    return error.response;
  }

  return Array.isArray(error.response.data) ? error.response.data.join(', ') : error.response.data;
}
