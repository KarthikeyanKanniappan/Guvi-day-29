import axios from "axios";

const URL = "https://62ff9b659350a1e548e2995c.mockapi.io";

export default axios.create({
  baseURL: URL,
});
