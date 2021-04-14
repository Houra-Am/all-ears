import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Upload } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  style: {
    marginTop: 10,

    color: "white",
  },
  wrapperCol: {
    span: 14,
  },
};

export default function Signup() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (data) => {
    try {
      delete data.confirm_password;
      console.log("data =", data);
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        history.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form {...layout} name='basic' onFinish={onFinish}>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='User Name'
        name='username'
        style={{ color: "white" }}
        rules={[
          {
            required: true,
            message: "Please input your user name!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        label='Confirm password'
        name='confirm_password'
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 14,
        }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
