import axios from "axios";

const api = axios.create({
  baseURL: "https://campus-link-management-system-v260.vercel.app/api",
});

export default api;