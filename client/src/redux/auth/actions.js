import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { getRequest, postRequest } from "../../services/service";
import { clearMessage } from "../messages/actions";
import SendAccessToken from "../../consts/sendAccessToken";
import LocalStorageService from "../../services/LocalStorageService";

export const login = createAsyncThunk(
  "auth/login",
  async (loginUserFormData, { dispatch }) => {
    try {
      const response = await postRequest(
        "/login",
        SendAccessToken.NO,
        loginUserFormData
      );
      LocalStorageService.set("accessToken", response.accessToken);
      setTimeout(() => dispatch(clearMessage()));
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);

export const logout = createAction("auth/logout");

export const getUserIfTheTokenHasNotExpired = createAsyncThunk(
  "auth/getUserIfTheTokenHasNotExpired",
  async () => {
    try {
      const response = await getRequest("/user", SendAccessToken.YES);
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);
