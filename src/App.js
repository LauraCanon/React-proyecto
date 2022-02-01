import AdditionalInfo from "./views/AdditionalInfo";
import Footer from "./Footer";
import HomeCollabolator from "./views/HomeCollabolator";
import HomeStandarUser from "./views/HomeStandardUser";
import LandingPages from "./views/LandingPages";
import Navbar from "./navbar";
import Payment from "./views/Payment";
import RequestService from "./views/RequestService";
import SearchPage from "./views/SearchPage";
import RegistrationUser from "./views/Registration";
import RegistrationCollab from "./views/RegisCollab";
import RegistrationPerfil from "./views/RegistrationPerfil";
import SessionLogin from "./views/SessionLogin";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RequireAuth } from "./component/PrivateRoute";
import { selectUser } from "./store/userSlicer/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <Navbar isAuth={user} />
      <Routes>
        <Route path="*" element={<LandingPages isAuth={user} />} />
        <Route path="/search" element={<SearchPage isAuth={user} />} />
        <Route path="/request" element={<RequestService isAuth={user} />} />
        <Route
          path="/registration-user"
          element={<RegistrationUser isAuth={user} />}
        />
        <Route
          path="/registration-collab"
          element={<RegistrationCollab isAuth={user} />}
        />
        <Route
          path="/regperfil"
          element={<RegistrationPerfil isAuth={user} />}
        />
        <Route path="/payment" element={<Payment isAuth={user} />} />
        <Route path="/sessionlogin" element={<SessionLogin isAuth={user} />} />
        <Route path="/home">
          <Route path="user" element={<HomeStandarUser isAuth={user} />} />
          <Route path="collaborator">
            <Route
              path=":id"
              isAuth={user}
              element={
                <RequireAuth>
                  <HomeCollabolator isAuth={user} />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
        <Route path="/addinfo" element={<AdditionalInfo isAuth={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
