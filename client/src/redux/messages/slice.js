import { createSlice } from "@reduxjs/toolkit";
import { clearMessage } from "./actions";

const initialState = {
  type: "",
  message: "",
  key: "updatable",
};

const slice = createSlice({
  name: "indicationMessage",
  initialState,
  reducers: {
    updateIndicationMessage(state, action) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    ["auth/login/fulfilled"]: (state, action) => {
      const response = action.payload;
      if (response.status === 200) return;
      return { ...state, type: response.type, message: response.message };
    },
    [clearMessage]: (state) => {
      state.type = "";
      state.message = "";
    },
  },
});

export const { updateIndicationMessage } = slice.actions;
export default slice.reducer;
