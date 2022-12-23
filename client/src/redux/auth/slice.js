import { createSlice } from "@reduxjs/toolkit";

import ApiRequestStatus from "../../consts/apiRequestStatus";
import LocalStorageService from "../../services/LocalStorageService";
import { logout } from "./actions";

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
    ["auth/getUserIfTheTokenHasNotExpired/fulfilled"]: (state, action) => {
      const response = action.payload;
      if (response.status !== 200) return;
      state.loginStatus = ApiRequestStatus.SUCCESSFULLY;
      state.user = response.user;
    },
    [logout]: () => {
      LocalStorageService.remove("accessToken")
      return initialState;
    },
  },
});

export default slice.reducer;
