import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signup = (username, password) => {
  return axios.post(`${API_URL}/signup`, { username, password });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

// Add other API methods as needed
