import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const redirectToPath = (path) => {
    navigate(path);
  };

  const navigateToLoginPage = () => redirectToPath("/login");
  const navigateToCustomersPage = () => redirectToPath("/home/customers");

  return {
    navigateToLoginPage,
    navigateToCustomersPage,
  };
};

export default useCustomNavigate;
