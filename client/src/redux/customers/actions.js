import { createAsyncThunk } from "@reduxjs/toolkit";

import { getRequest } from "../../services/service";
import SendAccessToken from "../../consts/sendAccessToken";

export const loadCustomers = createAsyncThunk(
  "customers/loadCustomers",
  async () => {
    try {
      const response = await getRequest(
        "/customers",
        SendAccessToken.YES,
      );
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);