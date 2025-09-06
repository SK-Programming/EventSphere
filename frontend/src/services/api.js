import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
});

// Attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const signup = (formData) => API.post("/auth/register", formData); // ✅ fixed
export const login = (formData) => API.post("/auth/login", formData);
export const getProfile = () => API.get("/auth/profile");
