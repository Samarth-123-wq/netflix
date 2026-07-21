import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../utility/Slice";
import movieReducer from "./../utility/MovieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
