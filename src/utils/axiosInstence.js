// axios
import axios from 'axios';

const axiosInstence = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    withCredentials: true
});

// Auto attach token
axiosInstence.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstence;