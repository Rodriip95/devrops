import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
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
              <Link className="nav-link" to="/#about">
                ¿Que es Devrops?
              </Link>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              
              <Link className="nav-link"  to="/#course">
                Cursos
              </Link>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <Link className="nav-link" to="/#testimonials">
                Testimonios
              </Link>
              <div className="lineanav"></div>
            </li>
            <li className="nav-item lista-items">
              <Link className="nav-link" to="/#faq">
                FAQ
              </Link>
              <div className="lineanav"></div>
            </li>
          </ul>
          </div>  
        </div>
      </div>
    </nav>
  );
}
