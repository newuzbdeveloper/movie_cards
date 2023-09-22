import { configureStore } from "@reduxjs/toolkit";
import { movieCardsApi } from "../features/MovieCardApi";

export const store = configureStore({
  reducer: {
    [movieCardsApi.reducerPath]: movieCardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieCardsApi.middleware),
});
