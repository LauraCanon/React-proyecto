import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";
import LandingPages from "./views/LandingPages";
import HomeStandarUser from "./views/HomeStandardUser";
import HomeCollabolator from "./views/HomeCollabolator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPages />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/request" element={<RequestService />} />
        <Route path="/home">
          <Route path="user" element={<HomeStandarUser />} />
          <Route path="collabolator" element={<HomeCollabolator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
