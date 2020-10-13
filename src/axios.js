import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: ("Access-Control-Allow-Origin", "*"),
});

export default instance;
