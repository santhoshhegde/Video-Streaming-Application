import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cache: (state, action) => {
      // return { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cache } = searchSlice.actions;
export default searchSlice.reducer;
