import React from "react";
import { NavLink } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import logoImg from "../styles/images/logo.jpg";
import { getLoginStatus } from "../redux/auth/selectors";
import ApiRequestStatus from "../consts/apiRequestStatus";

export default () => {
  const loginStatus = useSelector(getLoginStatus);

  return (
    <div className="entry">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <h1>Our new website</h1>
        {loginStatus === ApiRequestStatus.SUCCESSFULLY ? (
          <NavLink to="/home" className="entry-nav">
            <u>entry</u>
          </NavLink>
        ) : (
          <NavLink to="/login" className="entry-nav">
            <u>login</u>
          </NavLink>
        )}
      </header>
      <div className="heading"></div>
      <div className="wrapper">
        <div className="entryPage">
          <h1> Wellcome to our new website </h1>
          <h2>
            Hope you will enjoy from our new site <SmileOutlined />
          </h2>
        </div>
      </div>
    </div>
  );
};
