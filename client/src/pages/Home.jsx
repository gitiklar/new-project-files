import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import logoImg from "../styles/images/logo.jpg";

export default () => {

  const logOutHandler = () => {

  };

  return (
    <div className="home-page">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="userContainer">
          <div className="divHello">{`Hello ${"username" || ""}`}</div>
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
