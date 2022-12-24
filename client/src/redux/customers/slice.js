import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export default slice.reducer;
