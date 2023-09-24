import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovieCards } from "./api";
import { data } from "./data";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const data = await fetchMovieCards();
  return data.data;
});

export const movieCardSlice = createSlice({
  name: "movieCards",
  initialState: data.results,
  reducers: {},
});

export const selectMovieCardStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;

export default movieCardSlice.reducer;
