import React from "react";

import './styles.css'

function NavbarGlobal() {
  return (
    <header id="navbarGlobal">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" rel="noreferrer">
            4Refugees
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" rel="noreferrer">
                  Refugiado
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" rel="noreferrer">
                  Contratante
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" rel="noreferrer">
                  Vagas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" rel="noreferrer">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarGlobal;
