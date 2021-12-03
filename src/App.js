import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";
import LandingPages from "./views/LandingPages";
import HomeStandarUser from "./views/HomeStandardUser";
import HomeCollabolator from "./views/HomeCollabolator";
import Registration from "./views/Registration";
import RegistrationPerfil from "./views/RegistrationPerfil";
import SessionLogin from "./views/SessionLogin"
import AdditionalInfo from "./views/AdditionalInfo";


function App() {
  const url = `https://randomuser.me/api?results=24`;
  const [people, setPeople] = useState([]);
  const getCharacters = async () => {
    try {
      const resp = await fetch(url);
      const people = await resp.json();
      setPeople(people.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPages />} />
        <Route path="/search" element={<SearchPage result={people} />} />
        <Route path="/request" element={<RequestService />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/regperfil" element={<RegistrationPerfil />} />
        <Route path="/sessionlogin" element={<SessionLogin />} />

        <Route path="/home">
          <Route path="user" element={<HomeStandarUser />} />
          <Route path="collaborator" element={<HomeCollabolator />} />
        </Route>
        <Route path="/addinfo" element={<AdditionalInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
