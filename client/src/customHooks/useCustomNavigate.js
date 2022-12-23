import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const redirectToPath = (path) => {
    navigate(path);
  };

  const navigateToLoginPage = () => redirectToPath("/login");
  const navigateToHomePage = () => redirectToPath("/home");

  return {
    navigateToLoginPage,
    navigateToHomePage,
  };
};

export default useCustomNavigate;
