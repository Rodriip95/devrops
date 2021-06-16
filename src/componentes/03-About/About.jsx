import React from "react";
import Typed from "react-typed";
import "./about.scss";

export default function About() {
  return (
    <div className="container mb-5">
      <div
        id="about"
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <h1 className="about-h1 text-center mb-4">
          ¿Qué es <span>{"<Devrops>"}</span>?
        </h1>
        <p className="about-p text-center w-75 mt-3">
        Devrops apunta a ser un desafío para aprender sobre el desarrollo web Front-end. Basado en clases personalizadas en las que se pondrán a prueba los conocimientos que se irán dictando en el transcurso del programa. La idea es trabajar en proyectos reales y aprender sobre la metodología de trabajo en el mundo IT. Iniciamos desde las bases hasta poder concretar proyectos con diseños modernos y buena experiencia de usuario. Es un programa corto pero lleno de desafíos que te harán sentir programador desde el primer día.
        </p>
        <Typed
          strings={["Estás listo?"]}
          typeSpeed={80}
          loop
          backSpeed={80}
          className="tipeo text-capitalize mt-3"
        />
      </div>
    </div>
  );
}
