import { createSelector } from "@reduxjs/toolkit";

export const getCustomers = (state) => state.customers;

export const getCustomersArray = createSelector(
  getCustomers,
  (customers) => customers.customers
);

export const getCustomerById = (id) =>
  createSelector(getCustomersArray, (customersArray) =>
    customersArray.find((customer) => customer.id === id)
  );
