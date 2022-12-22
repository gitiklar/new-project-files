import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const onLogin = (loginFormData) => {};

  return (
    <div className="loginContainer">
      <div className="form-container">
        <Form dir="ltr" name="normal_login" className="form" onFinish={onLogin}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter email!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Link
              to={{ pathname: "/register" }}
              className="register colorWhite"
            >
              Or register now!
            </Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="colorWhite">
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
