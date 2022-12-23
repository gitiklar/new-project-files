import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/slice";
import indicationMessageReducer from "./messages/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    indicationMessage: indicationMessageReducer,
  },
});

export default store;
