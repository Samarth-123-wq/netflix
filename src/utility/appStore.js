import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../utility/Slice";
import movieReducer from "./../utility/MovieSlice";
import GptReducer from "./../utility/GptSlice";
import languageReducer from "./../utility/ConfigSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    Gpt: GptReducer,
    config: languageReducer,
  },
});

export default appStore;
