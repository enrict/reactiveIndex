import { API_KEY } from "src/api.js";

export default {
  fetchBusinessNews: `/top-headlines?country=gb&pageSize=20&category=business&apiKey=${API_KEY}`,
  fetchTechNews: `/top-headlines?country=gb&pageSize=20&category=technology&apiKey=${API_KEY}`,
  fetchGeneralNews: `/top-headlines?country=gb&pageSize=20&category=general&apiKey=${API_KEY}`,
  fetchHealthNews: `/top-headlines?country=gb&pageSize=20&category=health&apiKey=${API_KEY}`,
  fetchScienceNews: `/top-headlines?country=gb&pageSize=20&category=science&apiKey=${API_KEY}`,
  fetchSportsNews: `/top-headlines?country=gb&pageSize=20&category=sports&apiKey=${API_KEY}`,
};
