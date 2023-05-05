import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>
);
/*
React.createElement("ul", null,
    React.createElement("li",null,"Monday"),
    React.createElement("li",null,"Tuesday"),
    React.createElement("li",null,"Wednesday")*/