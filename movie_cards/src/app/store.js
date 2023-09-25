import { configureStore } from "@reduxjs/toolkit";
import movieCardReducer from "../features/MovieCardSlice";

export const store = configureStore({
  reducer: {
    movieCard: movieCardReducer,
  },
});
