import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar";
import Footer from "./Footer";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionLogin from "./views/SessionLogin";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <SessionLogin />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
