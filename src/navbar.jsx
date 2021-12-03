import React from "react";
import {Link} from "react-router-dom";



export default function Navbar() {
  return (
    <div className="App">
      <header className="d-flex flex-column h-100">
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
                  <a className="nav-link active" href="/sessionlogin">
                    Acceder
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
