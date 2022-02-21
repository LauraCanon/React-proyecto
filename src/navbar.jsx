import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './store/userSlicer/userSlice';

export default function Navbar({ isAuth }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const rolUser = window.localStorage.getItem('user');
  const rolCollab = window.localStorage.getItem('collaborator');
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <header className="d-flex flex-column h-100">
        {isAuth ? (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
              <Link className="navbar-brand link-light" to="/">
                <img
                  src="https://image.flaticon.com/icons/png/512/1207/1207155.png"
                  alt="fixhogar"
                  width="40"
                  height="40"
                  style={{ marginRight: '8px' }}
                ></img>
                FixHogar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    {rolUser && (
                      <Link className="nav-link active" to="/home/user">
                        {`Mi Perfil de Usuario`}
                      </Link>
                    )}
                    {rolCollab && (
                      <Link className="nav-link active" to="/home/collaborator">
                        {`Mi Perfil de Colaborador`}
                      </Link>
                    )}
                  </li>
                  <Link
                    to="/"
                    className="nav-link active"
                    onClick={logoutHandler}
                  >
                    <li className="nav-item">Salir</li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
              <Link className="navbar-brand link-light" to="/">
                <img
                  src="https://image.flaticon.com/icons/png/512/1207/1207155.png"
                  alt="fixhogar"
                  width="40"
                  height="40"
                  style={{ marginRight: '8px' }}
                ></img>
                FixHogar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/sessionlogin">
                      Acceder
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/regperfil">
                      Regístrate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
