import axios from "axios";

const CLIENT_URL = "https://pokeapi.co/api/v2";

const AxiosApi = axios.create({
  baseURL: CLIENT_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosApi;
