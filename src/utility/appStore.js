import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../utility/Slice";
import movieReducer from "./../utility/MovieSlice";
import GptReducer from "./../utility/GptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    Gpt: GptReducer,
  },
});

export default appStore;
