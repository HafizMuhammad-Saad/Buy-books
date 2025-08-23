// axios
import axios from 'axios';

const axiosInstence = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    withCredentials: true
});

export default axiosInstence;