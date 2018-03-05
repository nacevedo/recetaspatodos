import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Post from "./Post";

// Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
function getUrlVars() {
  return window.location.pathname.split(".")[0];
}

var pathname = getUrlVars();

switch (pathname) {
case "/agregar":
  ReactDOM.render(<Post />, document.getElementById("root"));
  break;

case undefined:
default:
  ReactDOM.render(<App />, document.getElementById("root"));
  break;
}
