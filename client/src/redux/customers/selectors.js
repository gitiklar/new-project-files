import { createSelector } from "@reduxjs/toolkit";

export const getCustomers = (state) => state.customers;

export const getCustomersArray = createSelector(
  getCustomers,
  (customers) => customers.customers
);
