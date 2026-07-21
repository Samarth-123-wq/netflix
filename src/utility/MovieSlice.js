import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovie: null,
  },
  reducers: {
    nowplayingMovie: (state, action) => {
      state.nowplayingmovie = action.payload;
    },
  },
});

export const { nowplayingMovie } = movieSlice.actions;

export default movieSlice.reducer;
