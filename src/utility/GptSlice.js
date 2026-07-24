import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GPT",
  initialState: {
    showgpt: false,
  },
  reducers: {
    GptToggleView: (state) => {
      state.showgpt = !state.showgpt;
    },
  },
});

export const { GptToggleView } = GptSlice.actions;
export default GptSlice.reducer;
