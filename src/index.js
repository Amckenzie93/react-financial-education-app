import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div id="topRef">
    <BrowserRouter> -- react browser router wrapper - so anything inside can use browser routing so page doesnt refresh.
        <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();