import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import Home from "../views/Home";
import Podcasts from "../views/Podcasts";
import PodcastDetailSection from "../components/PodDetailSection";
import SupportUs from "../views/SupportUs";

export default function NavBar(props) {
  return (
    <BrowserRouter>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
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

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/podcasts/genre/:id' component={Podcasts} />
        <Route path='/podcast/:id' component={PodcastDetailSection} />
        <Route exact path='/supportUs' component={SupportUs} />
      </Switch>
    </BrowserRouter>
  );
}
