import React, { useState } from "react";
import './navbar.scss'

export default function Navbar() {

  const [title, setTitle] = useState("<Devrops/>")

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          {title}
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
          <i class="fas fa-bars text-light"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="d-flex flex-row justify-content-md-start justify-content-lg-end w-100">
          <ul className="navbar-nav lista">
            <li className="nav-item lista-items">
              <a className="nav-link" href="#">
                ¿Que es Devrops?
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#">
                Cursos
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#">
                Testimonios
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#">
                Proyectos
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#">
                FAQ
              </a>
              <div className="lineanav"></div>
            </li>
          </ul>
          </div>  
        </div>
      </div>
    </nav>
  );
}
