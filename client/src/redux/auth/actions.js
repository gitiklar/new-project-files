import { createAsyncThunk } from "@reduxjs/toolkit";

import { postRequest } from "../../services/service";
import { clearMessage } from "../messages/actions";

const DONT_SEND_TOKEN = false;

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