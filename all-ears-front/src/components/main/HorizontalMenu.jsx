import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "../main/SearchBar";

const { Header } = Layout;

const HorizontalMenu = () => {
  return (
    <>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
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
