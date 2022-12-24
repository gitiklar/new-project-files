import { createSelector } from "@reduxjs/toolkit";

export const getAuth = (state) => state.auth;

export const getLoginStatus = createSelector(
  getAuth,
  (auth) => auth.loginStatus
);

export const getLoggedInUser = createSelector(getAuth, (auth) => auth.user);
