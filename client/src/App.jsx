import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Entry from "./pages/Entry";
import Bank from "./pages/Bank";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomersTable from "./components/customersTable/CustomersTablePage";
import EditCustomer from "./components/editCustomer/EditCustomerPage";
import { getUserIfTheTokenHasNotExpired } from "./redux/auth/actions";
import "./styles/app.scss";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserIfTheTokenHasNotExpired());
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/bank" element={<Bank />}>
        <Route index element={<div>Choose tab</div>} />
        <Route path="customers" element={<CustomersTable />} />
        <Route path="edit/:id" element={<EditCustomer />} />
      </Route>
      <Route path="*" element={<Entry />} />
    </Routes>
  );
};
