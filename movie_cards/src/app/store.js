import { configureStore } from "@reduxjs/toolkit";
import movieCardReducer from "../features/MovieCard";

export const store = configureStore({
  reducer: {
    movieCard: movieCardReducer,
  },
});
