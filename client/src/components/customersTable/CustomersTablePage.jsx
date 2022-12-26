import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input } from "antd";

import { loadCustomers } from "../../redux/customers/actions";
import { getCustomersArray } from "../../redux/customers/selectors";
import useCustomNavigate from "../../customHooks/useCustomNavigate";

export default () => {
  const customers = useSelector(getCustomersArray);
  const customNavigate = useCustomNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [visibleCustomers, setVisibleCustomers] = useState([]);
  const [filterTable, setFilterTable] = useState([]);
  const [columns, setColumns] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCustomers());
  }, []);

  useEffect(() => {
    if (!customers.length) return;
    if (!searchVal) setFilterTable(customers);
    if (!columns.length) updateColumns();
    setVisibleCustomers(customers);
  }, [customers]);

  const updateColumns = () => {
    setColumns(
      Object.keys(customers[0]).map((key) => ({
        title: key,
        dataIndex: key,
        key,
        ...(key === "id" ? { render: (text) => <a>{text}</a> } : {}),
      }))
    );
  };

  const search = (value) => {
    const filterTable = visibleCustomers.filter((customer) =>
      Object.keys(customer).some(
        (key) =>
          key !== "date" &&
          String(customer[key]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilterTable(filterTable);
  };

  const onRowClick = ({ id }) => {
    customNavigate.navigateToEditCustomerPage(id);
  };

  return (
    <div>
      <Input.Search
        placeholder="Search by..."
        enterButton
        onSearch={search}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyUp={(e) => search(e.target.value)}
      />
      {customers.length && (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={filterTable}
          pagination={{ pageSize: 5 }}
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
        />
      )}
    </div>
  );
};
