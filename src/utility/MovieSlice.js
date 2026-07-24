import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovie: null,
    trailerId: null,
    popularMovie: null,
  },
  reducers: {
    nowplayingMovie: (state, action) => {
      state.nowplayingmovie = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    trailerIds: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { nowplayingMovie, trailerIds, popularMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
