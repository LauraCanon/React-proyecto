
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";
import LandingPages from "./views/LandingPages";
import HomeStandarUser from "./views/HomeStandardUser";
import HomeCollabolator from "./views/HomeCollabolator";
import Registration from "./views/Registration";
import RegistrationPerfil from "./views/RegistrationPerfil";
import SessionLogin from "./views/SessionLogin"
import AdditionalInfo from "./views/AdditionalInfo";
import People from './component/People' 

function App() {
  
  const [people, setPeople] = useState(People);
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPages />} />
        <Route path="/search" element={<SearchPage people={people} />} />
        <Route path="/request" element={<RequestService />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/regperfil" element={<RegistrationPerfil />} />
        <Route path="/sessionlogin" element={<SessionLogin people={people} />} />
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
