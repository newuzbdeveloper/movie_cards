import axiosLib from "axios";
import { MOVIEDB_API_URL } from "../common/constants";

export const axios = axiosLib.create({
  baseURL: MOVIEDB_API_URL,
});

axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_MOVIEDB_API_KEY
}`;
axios.defaults.headers.common["accept"] = "application/json";

export const fetchMovieCards = async () =>
  await axios.get("/trending/movie/day?");
