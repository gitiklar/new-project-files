import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { isPasswordCorrect } from "../utils/passwordValidation";
import { login } from "../redux/auth/actions";
import useIndicationMessage from "../customHooks/useIndicationMessage";

const Login = () => {
  const dispatch = useDispatch();
  const { loadingMessage } = useIndicationMessage();

  const onLogin = async (loginFormData) => {
    loadingMessage();
    dispatch(login(loginFormData));
  };

  return (
    <div className="loginContainer">
      <div className="form-container">
        <Form dir="ltr" name="normal_login" className="form" onFinish={onLogin}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter password!",
                min: 6,
                message: "The password must be at least 6 characters long!",
              },
              {
                validator: (_, value) => {
                  if (!value || isPasswordCorrect(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      '"The password must include a special character, numeric character and an alphabetic character!"'
                    );
                  }
                },
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Link to="/register" className="register colorWhite">
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
