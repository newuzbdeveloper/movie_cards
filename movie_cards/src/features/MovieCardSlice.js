import { createSlice } from "@reduxjs/toolkit";
// import { fetchMovieCards } from "./api";
import { data } from "./data";

// export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
//   const data = await fetchMovieCards();
//   return data.data;
// });

export const movieCardSlice = createSlice({
  name: "movieCards",
  initialState: data.results,
  reducers: {},
});

export default movieCardSlice.reducer;
