import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MOVIEDB_API_URL } from "../common/constants";

export const movieCardsApi = createApi({
  reducerPath: "movieCardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIEDB_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_MOVIEDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovieCards: builder.query({
      query: () => "/trending/movie",
      transformResponse: (response) => response.results,
      transformErrorResponse: (error) =>
        error?.data.status_message ?? "Something went wrong!",
    }),
  }),
});

export const { useGetMovieCardsQuery } = movieCardsApi;
