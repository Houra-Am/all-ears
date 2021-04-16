import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "../main/SearchBar";
import logo from "../../image/logo.png";
import "../../css/main-style/HorizontalMenu.css";

const { Header } = Layout;

const HorizontalMenu = () => {
  return (
    <>
      <Layout className='layout'>
        <Header>
          {/* <img className='logo' alt='logo' src={logo} style={{ width: 40 }} /> */}
          <img
            className='logo'
            src={logo}
            alt='logo'
            style={{ width: 50, height: 50 }}
          />
          <div className='searchBarPos'>
            <SearchBar />
          </div>
          <Menu
            className='horizontal-menu'
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={["1"]}>
            <Menu.Item key='1'>
              <Link to='/'>All Ears</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/podcasts/genre/144'>Podcasts</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/supportUs'>Support Us</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default HorizontalMenu;
