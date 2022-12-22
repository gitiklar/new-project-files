import React from "react";
import { Routes, Route } from "react-router-dom";

import Entry from "./pages/Entry";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/app.scss";

export default () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />}>
        <Route index element={<div>Choose tab</div>} />
      </Route>
      <Route path="*" element={<Entry />} />
    </Routes>
  );
};
