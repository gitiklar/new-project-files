import { createSlice } from "@reduxjs/toolkit";

import ApiRequestStatus from "../../consts/apiRequestStatus";

const initialState = {
  loginStatus: ApiRequestStatus.INIT,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    ["auth/login/fulfilled"]: (state, action) => {
      const response = action.payload;
      if (response.status !== 200) return;
      state.loginStatus = ApiRequestStatus.SUCCESSFULLY;
      state.user = response.user;
    },
  },
});

export default slice.reducer;
