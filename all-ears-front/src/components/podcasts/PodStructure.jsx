import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  CompassOutlined,
  RocketOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const PodStructure = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (user) {
      setIsConnected(true);
    }
  }, [user]);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <Sider width={200} className='site-layout-background'>
      <Menu
        mode='inline'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item key='sub1' icon={<HomeOutlined />} title='Home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='sub2' icon={<CompassOutlined />} title='Discover'>
          <Link to='/podcasts/genre/127'>Discover</Link>
        </Menu.Item>
        <Menu.Item key='sub3' icon={<RocketOutlined />} title='Support'>
          <Link to='/supportUs'>Support Us</Link>
        </Menu.Item>

        {isConnected ? (
          <>
            <Menu.Item key='sub4' icon={<RocketOutlined />} title='Support'>
              <Link to='/podcasts/genre/93' onClick={logout}>
                Logout
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key='sub5' icon={<UserOutlined />}>
              <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key='sub6' icon={<UserOutlined />}>
              <Link to='/signup'>Sign Up</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
};

export default PodStructure;
