import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/data";

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // menambahkan movie ke movies
      state.movies.push(action.payload);
    },
    deleteMovie() {},
  },
});

// generate action ad reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie };
