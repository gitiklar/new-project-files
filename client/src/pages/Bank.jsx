import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { getLoggedInUser } from "../redux/auth/selectors";
import logoImg from "../styles/images/logo.jpg";
import { logout } from "../redux/auth/actions";
import useIndicationMessage from "../customHooks/useIndicationMessage";

export default () => {
  const loggedInUser = useSelector(getLoggedInUser);
  const { destoryMessage } = useIndicationMessage();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => destoryMessage(), []);

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="bank-page">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="userContainer">
          <div className="divHello">{`Hello ${
            loggedInUser
              ? loggedInUser.firstName + " " + loggedInUser.lastName
              : "guest"
          }`}</div>
          <NavLink onClick={logOutHandler}>logout</NavLink>
        </div>
      </header>
      <div className="heading">
        <div className="menuLine">
          <NavLink to="/">Back to entry</NavLink>
          <NavLink to="customers">Customers</NavLink>
          {location.pathname !== "/bank/customers" && (
            <NavLink to="edit">Edit</NavLink>
          )}
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
