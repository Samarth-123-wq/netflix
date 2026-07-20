import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../utility/Slice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
