import handleApiError from "@/helper/apiErrorHandler";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Use the CORS proxy
const API_URL_PROXY = "https://cors-anywhere.herokuapp.com/https://www.warematch.online/";

const API = axios.create({
  baseURL: API_URL_PROXY,
  headers: {
    "Content-Type": "application/json",
    "Origin": "https://wearmatch-assessment-git-api-end-point-stevesultans-projects.vercel.app", // Add your frontend origin here
  },
});

/**
 * Sends a GET request to the specified URL.
 * 
 * @param {string} url - The URL to send the GET request to.
 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
 * @returns {Promise<AxiosResponse<T>>} - The response from the server.
 */
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    return await API.get<T>(url, config);
  } catch (error) {
    throw handleApiError(error as AxiosError);
  }
}

/**
 * Sends a POST request to the specified URL with the given data.
 * 
 * @param {string} url - The URL to send the POST request to.
 * @param {T} data - The data to send in the POST request.
 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
 * @returns {Promise<AxiosResponse<T>>} - The response from the server.
 */
export const post = async <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    return await API.post<T>(url, data, config);
  } catch (error) {
    throw handleApiError(error as AxiosError);
  }
}

/**
 * Sends a PUT request to the specified URL with the given data.
 * 
 * @param {string} url - The URL to send the PUT request to.
 * @param {T} data - The data to send in the PUT request.
 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
 * @returns {Promise<AxiosResponse<T>>} - The response from the server.
 */
export const put = async <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    return await API.put<T>(url, data, config);
  } catch (error) {
    throw handleApiError(error as AxiosError);
  }
}

/**
 * Sends a DELETE request to the specified URL.
 * 
 * @param {string} url - The URL to send the DELETE request to.
 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
 * @returns {Promise<AxiosResponse<T>>} - The response from the server.
 */
export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    return await API.delete<T>(url, config);
  } catch (error) {
    throw handleApiError(error as AxiosError);
  }
}