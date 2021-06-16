import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {

  const [title, setTitle] = useState("<Devrops/>")

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <Link className="logo" to="/">
        <a className="navbar-brand" href="#">
          {title}
        </a>
      </Link>
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
              <a className="nav-link" href="#about">
                ¿Que es Devrops?
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#course">
                Cursos
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#testimonials">
                Testimonios
              </a>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <a className="nav-link" href="#faq">
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
