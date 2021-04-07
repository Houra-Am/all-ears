import React from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "../views/Home";
import Podcast from "../views/Podcast";
import SupportUs from "../views/SupportUs";
const { Header, Content, Footer } = Layout;

export default function NavBar(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
            <Menu.Item key='1'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/Podcast'>Podcasts</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/SupportUs'>Support Us</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className='site-layout'
          style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Podcast' component={Podcast} />
            <Route path='/SupportUs' component={SupportUs} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
