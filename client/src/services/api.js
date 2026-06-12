import axios from "axios";

const api = axios.create({
  baseURL: "https://campuslink-backend-bgph.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;