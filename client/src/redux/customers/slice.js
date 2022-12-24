import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/actions";

const initialState = {
  customers: [],
};

const slice = createSlice({
  name: "customers",
  initialState,
  extraReducers: {
    ["customers/loadCustomers/fulfilled"]: (state, action) => {
      const response = action.payload;
      if (response.status !== 200) return;
      state.customers = response.customers;
    },
    [logout]: () => {
      return initialState;
    },
  },
});

export default slice.reducer;
