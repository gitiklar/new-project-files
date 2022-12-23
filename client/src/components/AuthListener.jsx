import { useEffect } from "react";
import { useSelector } from "react-redux";

import ApiRequestStatus from "../consts/apiRequestStatus";
import { getLoginStatus } from "../redux/auth/selectors";
import useCustomNavigate from "../customHooks/useCustomNavigate";

export default () => {
  const loginStatus = useSelector(getLoginStatus);
  const customNavigate = useCustomNavigate();

  useEffect(() => {
    switch (loginStatus) {
      case ApiRequestStatus.SUCCESSFULLY:
        customNavigate.navigateToHomePage();
        break;
      case ApiRequestStatus.INIT:
        customNavigate.navigateToLoginPage();
        break;
    }
  }, [loginStatus]);
  return <></>;
};
