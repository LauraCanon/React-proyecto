import AdditionalInfo from './views/AdditionalInfo';
import Footer from './Footer';
import HomeCollabolator from './views/HomeCollabolator';
import HomeStandarUser from './views/HomeStandardUser';
import LandingPages from './views/LandingPages';
import Navbar from './navbar';
import Payment from './views/Payment';
import RequestService from './views/RequestService';
import SearchPage from './views/SearchPage';
import RegistrationUser from './views/Registration';
import RegistrationCollab from './views/RegisCollab';
import RegistrationPerfil from './views/RegistrationPerfil';
import SessionLogin from './views/SessionLogin';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RequireAuth } from './component/PrivateRoute';
import { GlobalProvider } from './context/GlobalState';
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <GlobalProvider>
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="*" element={<LandingPages isAuth={isAuth} />} />
          <Route path="/search" element={<SearchPage isAuth={isAuth} />} />
          <Route path="/request" element={<RequestService isAuth={isAuth} />} />
          <Route
            path="/registration-user"
            element={<RegistrationUser isAuth={isAuth} />}
          />
          <Route
            path="/registration-collab"
            element={<RegistrationCollab isAuth={isAuth} />}
          />
          <Route
            path="/regperfil"
            element={<RegistrationPerfil isAuth={isAuth} />}
          />
          <Route path="/payment" element={<Payment isAuth={isAuth} />} />
          <Route
            path="/sessionlogin"
            element={<SessionLogin isAuth={isAuth} />}
          />
          <Route path="/home">
            <Route path="user" element={<HomeStandarUser isAuth={isAuth} />} />
            <Route path="collaborator">
              <Route
                path=":id"
                isAuth={isAuth}
                element={
                  <RequireAuth>
                    <HomeCollabolator isAuth={isAuth} />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
          <Route path="/addinfo" element={<AdditionalInfo isAuth={isAuth} />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
