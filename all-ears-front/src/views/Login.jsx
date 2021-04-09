import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function Login() {

  let history = useHistory();

  const onFinish = async (data) => {
    try {
     
      console.log('Received values of form: ', data);
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const tokenObj = await response.json();
        localStorage.setItem('token', tokenObj.token);
        history.push('/admin')
      }
    } catch (err) {
      console.error(err)
    }
  };


  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      style={{ justifyContent:"center"}}
    >
      <Form.Item
        label="Email"
        name="email"
        style={{marginTop: 50, marginRight: 20}}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        style={{ marginRight: 20}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item 
      name="remember" 
      valuePropName="checked"
      style={{marginLeft: 20}}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
          </Button>
      </Form.Item>
    </Form>
  )
}


cd