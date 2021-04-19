import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "../main/SearchBar";
import logo from "../../image/logo.svg";
import "../../css/main-style/HorizontalMenu.css";

const { Header } = Layout;

const HorizontalMenu = () => {
  return (
    <>
      <Header
        className='main-header'
        style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        {/* <img className='logo' alt='logo' src={logo} style={{ width: 40 }} /> */}
        <img
          className='logo'
          src={logo}
          alt='logo'
          style={{ width: 45, height: 45 }}
        />
        <div className='searchBarPos'>
          <SearchBar />
        </div>
        <Menu className='horizontal-menu hvr-underline' mode='horizontal'>
          <Menu.Item key='1'>
            <Link to='/'>All Ears</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/podcasts/genre/144'>Podcasts</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default HorizontalMenu;
