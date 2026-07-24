import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
  name: "GPT",
  initialState: {
    language: "en",
  },
  reducers: {
    languagec: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { languagec } = ConfigSlice.actions;
export default ConfigSlice.reducer;
