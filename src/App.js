import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./common/Routes";
import "antd/dist/antd.css";
import "./styles/style.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
