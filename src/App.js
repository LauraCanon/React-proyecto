import AdditionalInfo from "./views/AdditionalInfo";
import Footer from "./Footer";
import HomeCollabolator from "./views/HomeCollabolator";
import HomeStandarUser from "./views/HomeStandardUser";
import LandingPages from "./views/LandingPages";
import Navbar from "./navbar";
import Payment from "./views/Payment";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";
import Registration from "./views/Registration";
import RegistrationPerfil from "./views/RegistrationPerfil";
import SessionLogin from "./views/SessionLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<LandingPages />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/request" element={<RequestService />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/regperfil" element={<RegistrationPerfil />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sessionlogin" element={<SessionLogin />} />
        <Route path="/home">
          <Route path="user" element={<HomeStandarUser />} />
          <Route path="collaborator">
            <Route path=":id" element={<HomeCollabolator />} />
          </Route>
        </Route>
        <Route path="/addinfo" element={<AdditionalInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
