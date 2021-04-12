import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/main/NavBar.jsx";
import ShowDetails from "../src/components/podPage/ShowDetails"

function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* <Signup /> */}
      <ShowDetails></ShowDetails>
    </div>
  );
}

export default App;
