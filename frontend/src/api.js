import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signup = (username, password) => {
  return axios.post(`${API_URL}/signup`, { username, password });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const getProfile = (username) => {
  return axios.get(`${API_URL}/users/${username}`);
};

export const updateBio = (username, bio) => {
  return axios.put(`${API_URL}/users/${username}/bio`, { bio });
};

export const createPost = (formData) => {
  return axios.post(`${API_URL}/posts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCreatedPosts = (username) => {
  console.log("Fetching created posts for:", username); // Debug log
  return axios.get(`${API_URL}/users/${username}/createdPosts`);
};

// ==================== FEEDBACK APIs ====================

// Submit feedback
export const submitFeedback = (userId, content) => {
  return axios.post(`${API_URL}/feedback`, { userId, content });
};

// Get all feedback
export const fetchFeedback = () => {
  return axios.get(`${API_URL}/feedback`);
};

// Delete feedback by ID
export const deleteFeedback = (id) => {
  return axios.delete(`${API_URL}/feedback/${id}`);
};

// Flag feedback by ID
export const flagFeedback = (id) => {
  return axios.post(`${API_URL}/feedback/${id}/flag`);
};

// Unflag feedback by ID
export const unflagFeedback = (id) => {
  return axios.post(`${API_URL}/feedback/${id}/unflag`);
};

// Add other API methods as needed

