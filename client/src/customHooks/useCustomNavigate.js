import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const redirectToPath = (path) => {
    navigate(path);
  };

  const navigateToLoginPage = () => redirectToPath("/login");
  const navigateToCustomersPage = () => redirectToPath("/bank/customers");
  const navigateToEditCustomerPage = (id) => redirectToPath(`/bank/edit/${id}`);

  return {
    navigateToLoginPage,
    navigateToCustomersPage,
    navigateToEditCustomerPage
  };
};

export default useCustomNavigate;
