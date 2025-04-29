import axios from "axios";

// Correct the environment check
const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
  withCredentials: true, // Send cookies to the server
});

export default axiosInstance;
