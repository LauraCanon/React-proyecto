import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RequestService from "./views/RequestService";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
