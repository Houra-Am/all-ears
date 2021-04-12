import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import Home from "../../views/Home";
import Podcasts from "../../views/Podcasts";
import Signup from "../../views/Signup";
import Login from "../../views/Login";
import SupportUs from "../../views/SupportUs";
import PodcastPage from "../../views/PodcastPage";
import YourLib from "../../views/YourLib";

export default function NavBar(props) {
  return (
    <BrowserRouter>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
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
        <Route path='/podcast/:id' component={PodcastPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={PodcastPage} />
        <Route path='/library' component={YourLib} />
        <Route exact path='/supportUs' component={SupportUs} />
      </Switch>
    </BrowserRouter>
  );
}
