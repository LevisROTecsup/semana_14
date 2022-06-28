import axios from "axios";
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

export const getData = async (path, { baseUrl = BASE_URL_API } = {}) => {
  try {
    const response = await axios.get(`${baseUrl}/${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const setData = async (path, { data, baseUrl = BASE_URL_API } = {}) => {
  try {
    const response = await axios.post(`${baseUrl}/${path}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateData = async (path, { data, baseUrl = BASE_URL_API } = {}) => {
  try {
    const response = await axios.put(`${baseUrl}/${path}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (path, { baseUrl = BASE_URL_API } = {}) => {
  try {
    const response = await axios.delete(`${baseUrl}/${path}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
