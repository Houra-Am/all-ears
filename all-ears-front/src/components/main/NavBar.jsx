import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "../../views/Home";
import Podcasts from "../../views/Podcasts";
import Signup from "../../views/Signup";
import Login from "../../views/Login";
import SupportUs from "../../views/SupportUs";
import PodcastPage from "../../views/PodcastPage";
import YourLib from "../../views/YourLib";
import SearchPage from "../../views/SearchPage";
import "../../css/main-style/NavBar.css";

export default function NavBar(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/podcasts/genre/:id' component={Podcasts} />
        <Route path='/podcast/:id' component={PodcastPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={PodcastPage} />
        <Route path='/library' component={YourLib} />
        <Route exact path='/search/:string' component={SearchPage} />
        <Route exact path='/supportUs' component={SupportUs} />
      </Switch>
    </BrowserRouter>
  );
}
