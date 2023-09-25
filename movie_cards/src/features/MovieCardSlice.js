import { createSlice } from "@reduxjs/toolkit";
// import { fetchMovieCards } from "./api";
import { data } from "./data";

// export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
//   const data = await fetchMovieCards();
//   return data.data;
// });

const movieCardSlice = createSlice({
  name: "movieCard",
  initialState: data.results,
  reducers: {},
});

export const selectAllMovies = (state) => state.movieCard;

export default movieCardSlice.reducer;
