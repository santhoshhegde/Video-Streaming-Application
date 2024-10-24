import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
  },
  reducers: {
    cache: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
  },
});

export const { cache } = searchSlice.actions;
export default searchSlice.reducer;
