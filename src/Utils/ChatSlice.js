import { createSlice } from "@reduxjs/toolkit";
import { LiveChatCount } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    liveChat: (state, action) => {
      state.message.splice(LiveChatCount, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { liveChat } = chatSlice.actions;
export default chatSlice.reducer;
