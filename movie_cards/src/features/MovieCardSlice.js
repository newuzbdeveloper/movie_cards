import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovieCards } from "./api";

const initialState = {
  movieCards: [],
  status: "idle",
  error: null,
};

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const data = await fetchMovieCards();
  return data.data;
});

const movieCardSlice = createSlice({
  name: "movieCard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieCards = action.payload.results;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllMovies = (state) => state.movieCard.movieCards;
export const selectStatus = (state) => state.movieCard.status;
export const selectError = (state) => state.movieCard.error;

export default movieCardSlice.reducer;
