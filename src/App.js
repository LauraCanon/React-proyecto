import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RequestService />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
