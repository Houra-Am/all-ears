import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  HomeOutlined,
  CompassOutlined,
  RocketOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MdLibraryMusic } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import logo from "../../image/logo.svg";

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
    window.location.reload();
  };

  return (
    <Sider width={200} className='side-bar'>
      <div className='side-bar-logo'>
        <img
          className='side-logo'
          src={logo}
          alt='logo'
          style={{ width: 30, height: 30 }}
        />
        <p className='logo-title' style={{ marginTop: 20, fontWeight: 600 }}>
          All Ears
        </p>
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item key='sub4' icon={<HomeOutlined />} title='Home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='sub5' icon={<FaHeadphonesAlt />} title='Podcasts'>
          <Link to='/podcasts/genre/144'>Podcasts</Link>
        </Menu.Item>
        <Menu.Item key='sub6' icon={<CompassOutlined />} title='Discover'>
          <AnchorLink to='/podcasts/genre/144' href='#discover'>
            Discover
          </AnchorLink>
        </Menu.Item>
        <Menu.Item key='sub7' icon={<MdLibraryMusic />} title='Library'>
          <Link to='/library'>Your Library</Link>
        </Menu.Item>
        <Menu.Item key='sub8' icon={<RocketOutlined />} title='Support'>
          <Link to='/supportUs'>Support Us</Link>
        </Menu.Item>

        {isConnected ? (
          <>
            <Menu.Item key='sub9' icon={<RocketOutlined />} title='Support'>
              <Link to='/podcasts/genre/93' onClick={logout}>
                Logout
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key='sub10' icon={<UserOutlined />}>
              <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key='sub11' icon={<UserOutlined />}>
              <Link to='/signup'>Sign Up</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
};

export default PodStructure;
