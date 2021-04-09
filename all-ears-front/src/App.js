import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Menu } from "antd";
import Home from "./views/Home";
import Podcast from "./views/Podcast";
import SupportUs from "./views/SupportUs";
import NavBar from "./components/NavBar";
// import PodcastDetails from"./components/PodcastDetails";
import Signup from "./views/Signup";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Signup />
    </div>
   
  );
}

export default App;
