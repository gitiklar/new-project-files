import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCustomers } from "../../redux/customers/actions";
import { getCustomersArray } from "../../redux/customers/selectors";

export default () => {
  const customers = useSelector(getCustomersArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCustomers());
  }, []);

  return (
    <div>
      {customers.map((customer) => (
        <div>{JSON.stringify(customer)}</div>
      ))}
    </div>
  );
};
