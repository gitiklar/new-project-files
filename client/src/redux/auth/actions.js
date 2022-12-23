import { createAsyncThunk } from "@reduxjs/toolkit";

import { getRequest, postRequest } from "../../services/service";
import { clearMessage } from "../messages/actions";

const DONT_SEND_TOKEN = false;
const SEND_TOKEN = true;

export const login = createAsyncThunk(
  "auth/login",
  async (loginUserFormData, { dispatch }) => {
    try {
      const response = await postRequest(
        "/login",
        DONT_SEND_TOKEN,
        loginUserFormData
      );
      localStorage.setItem("accessToken", response.accessToken);
      setTimeout(() => dispatch(clearMessage()));
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);

export const getUserIfTheTokenHasNotExpired = createAsyncThunk(
  "auth/getUserIfTheTokenHasNotExpired",
  async () => {
    try {
      const response = await getRequest("/user", SEND_TOKEN);
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);
