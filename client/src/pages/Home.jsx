import React, { useEffect } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { getLoggedInUser } from "../redux/auth/selectors";
import logoImg from "../styles/images/logo.jpg";
import { getIndicationMessage } from "../redux/messages/selectors";
import { logout } from "../redux/auth/actions";

export default () => {
  const loggedInUser = useSelector(getLoggedInUser);
  const indicationMessage = useSelector(getIndicationMessage);
  const dispatch = useDispatch();

  useEffect(() => message.destroy(indicationMessage.key), []);

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="home-page">
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
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
