import { createAsyncThunk } from "@reduxjs/toolkit";

import { getRequest, postRequest } from "../../services/service";
import SendAccessToken from "../../consts/sendAccessToken";

export const loadCustomers = createAsyncThunk(
  "customers/loadCustomers",
  async () => {
    try {
      const response = await getRequest("/customers", SendAccessToken.YES);
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);
export const editCustomer = createAsyncThunk(
  "customers/editCustomer",
  async (customerData) => {
    try {
      const response = await postRequest(
        "/customer",
        SendAccessToken.YES,
        customerData
      );
      return response;
    } catch (err) {
      return { type: "error", message: "Oops, an error occurred!" };
    }
  }
);
