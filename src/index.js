import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./css/common.css";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement
);