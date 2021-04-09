import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "../views/Home";
import AllEars from "../views/AllEars";
import Podcast from "../views/Podcast";
import SupportUs from "../views/SupportUs";
const { Content, Footer } = Layout;

export default function NavBar(props) {
  return (
    <BrowserRouter>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
        <Menu.Item key='1'>
          <Link to='/'>All Ears</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/Podcast'>Podcasts</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/SupportUs'>Support Us</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Podcast' component={Podcast} />
        <Route path='/Podcast/:id' component={Podcast} />
        <Route path='/SupportUs' component={SupportUs} />
      </Switch>
    </BrowserRouter>
  );
}
