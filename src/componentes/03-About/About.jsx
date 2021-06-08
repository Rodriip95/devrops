import React from "react";
import Typed from 'react-typed';
import "./about.scss"

export default function About(){

    return(
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="about-h1">¿Qué es <span>{"<Devrops>"}</span>?</h1>
                <p className="about-p text-center w-50">Es una nueva propuesta en el mundo de los cursos</p>
                <Typed
                    strings={['Are you ready?']}
                    typeSpeed={80}
                    loop
                    backSpeed={80}
                    className="tipeo"
                    />
            </div>
        </div>
    )
}