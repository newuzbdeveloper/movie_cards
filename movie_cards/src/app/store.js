import { configureStore } from "@reduxjs/toolkit";
import movieCardReducer from "../features/movies/MovieCardSlice";

export const store = configureStore({
  reducer: {
    movieCard: movieCardReducer,
  },
});
