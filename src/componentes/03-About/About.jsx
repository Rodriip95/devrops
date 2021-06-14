import React from "react";
import Typed from 'react-typed';
import "./about.scss"

export default function About(){

    return(
        <div className="container">
            <div id="about" className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="about-h1 text-center">¿Qué es <span>{"<Devrops>"}</span>?</h1>
                <p className="about-p text-center w-75 mt-3">Devrops apunta a ser un desafio para aprender sobre el desarrollo web Front-end. Basado en clases personalizadas en las que se pondran a prueba los conocimientos que se iran dictando en el transcurso del programa. La idea es trabajar en proyectos reales y aprender sobre la metodologia de trabajo en el mundo IT. Iniciamos desde las bases hasta poder concretar proyectos con diseños modernos y buena expereciencia de usuario. Es un programa corto pero lleno de desafios que te haran sentir programador desde el primer dia.</p>
                <Typed
                    strings={['Estás listo?']}
                    typeSpeed={80}
                    loop
                    backSpeed={80}
                    className="tipeo text-capitalize"
                    />
            </div>
        </div>
    )
}