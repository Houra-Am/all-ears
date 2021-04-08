import React from "react";
import "./App.css";
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
