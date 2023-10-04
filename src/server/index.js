import axios from "axios";

export const requies = axios.create({
  baseURL: "https://blog-backend-production-a0a8.up.railway.app/api/v1",
  timeout: 10000,
});
