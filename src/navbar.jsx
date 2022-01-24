import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

export default function Navbar({ isAuth }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="App">
      <header className="d-flex flex-column h-100">
        {isAuth ? (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
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
                      Usuario x logueado
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={logoutHandler}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
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
