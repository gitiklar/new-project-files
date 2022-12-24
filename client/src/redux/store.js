import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/slice";
import customersReducer from "./customers/slice";
import indicationMessageReducer from "./messages/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customersReducer,
    indicationMessage: indicationMessageReducer,
  },
});

export default store;
