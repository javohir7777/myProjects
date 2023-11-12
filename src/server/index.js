import axios from "axios";

export const requies = axios.create({
  baseURL: "https://ap-blog-backend.up.railway.app/api/v1",
  timeout: 10000,
});
