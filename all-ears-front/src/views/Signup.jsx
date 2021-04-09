import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Upload } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  style:{
    marginTop: 10,
    backgroundColor:"#d4f996",
    color:"white",
  },
  wrapperCol: {
    span: 14,
  },
};


export default function Signup() {
   let history = useHistory();
  const [imageUrl, setImage] = useState('')

  const onFinish = async (data) => {
    try {
  data.profilePicture = data.profilePicture.file.response.imageUrl;
      delete data.confirm_password;
      // Tu peux changer la route
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const tokenObj = await response.json();
        // A réviser
        localStorage.setItem('token', tokenObj.token);
        history.push('/admin');
      }
    } catch (err) {
      console.error(err)
    }
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = info => {
    if (info.file.status === 'done') {
      console.log(info)
      getBase64(info.file.originFileObj, imageUrl => setImage(imageUrl));
    }
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      console.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      console.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item label="Profile image"
        name="profile_img" >
        <Upload
          name="profile_img"
          listType="picture-card"
          beforeUpload={beforeUpload}
          showUploadList={false}
          // A réviser !!!
          action="http://localhost:8000/upload"
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
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
        label="User Name"
        name="username"
        style={{color:"white"}}
        rules={[
          {
            required: true,
            message: 'Please input your user name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
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
        label="Confirm password"
        name="confirm_password"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 14,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}


