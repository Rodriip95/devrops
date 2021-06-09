import React from "react";
import './navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Devrops
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="d-flex flex-row justify-content-md-start justify-content-lg-end w-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                ¿Que es Devrops?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
          </div>  
        </div>
      </div>
    </nav>
  );
}
