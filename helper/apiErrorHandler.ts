import { AxiosError } from 'axios';

interface ErrorResponse {
  error: string;
}

/**
 * Handles API errors by returning appropriate error messages based on the status code.
 * 
 * @param {AxiosError} error - The error object from Axios.
 * @returns {string} - The error message.
 */
const handleApiError = (error: AxiosError): string => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    const statusCode = error.response.status;
    const data = error.response.data as ErrorResponse;

    const statusMessages = new Map<number, string>([
      [400, `400: ${data.error}`],
      [401, `401: ${data.error}`],
      [403, `403: ${data.error}`],
      [404, `404: ${data.error}`],
      // Add more status codes and messages as needed
    ]);

    return statusMessages.get(statusCode) || `Error: ${statusCode} - An unexpected error occurred.`;
  } else if (error.request) {
    // The request was made but no response was received
    return 'No response received from the server.';
  } else {
    // Something happened in setting up the request that triggered an Error
    return `Error: ${error.message}`;
  }
};

export default handleApiError;