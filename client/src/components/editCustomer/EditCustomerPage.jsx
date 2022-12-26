import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import dayjs from "dayjs";

import { getCustomerById } from "../../redux/customers/selectors";
import { editCustomer } from "../../redux/customers/actions";

export default () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const customer = useSelector(getCustomerById(id));
  const dispatch = useDispatch();
  const dateFormat = "DD/MM/YYYY";

  const onFinish = (values) => {
    dispatch(
      editCustomer({
        ...values,
        date: moment(new Date(values.date)).format(dateFormat),
      })
    );
  };

  return (
    <Form
      labelCol={{
        sm: {
          span: 10,
        },
      }}
      form={form}
      name="edit"
      onFinish={onFinish}
      initialValues={{
        id: customer?.id,
        email: customer?.email,
        firstName: customer?.firstName,
        lastName: customer?.lastName,
        date: dayjs(customer?.date, dateFormat),
        phone: customer?.phone,
        bankAccount: customer?.bankAccount,
      }}
    >
      <Form.Item name="id" label="ID">
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstName"
        label="firstName"
        rules={[
          {
            required: true,
            message: "Please input your firstName!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="lastName"
        rules={[
          {
            required: true,
            message: "Please input your lastName!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="date"
        label="date"
        rules={[
          {
            required: true,
            message: "Please select date!",
          },
        ]}
      >
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="bankAccount"
        label="bankAccount"
        rules={[
          {
            required: true,
            message: "Please input your bankAccount!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
