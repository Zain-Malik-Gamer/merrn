import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://merrn-1-xa3k.onrender.com/api", // 👈 your live backend URL
  withCredentials: true, // Send cookies to the server
});

export default axiosInstance;
