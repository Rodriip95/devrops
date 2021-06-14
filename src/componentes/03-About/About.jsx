import React from "react";
import Typed from 'react-typed';
import "./about.scss"

export default function About(){

    return(
        <div className="container">
            <div id="about" className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="about-h1 text-center">¿Qué es <span>{"<Devrops>"}</span>?</h1>
                <p className="about-p text-center w-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias iure, nobis nisi adipisci dignissimos, fuga, pariatur placeat cupiditate reiciendis suscipit ipsum rerum doloribus necessitatibus aliquid vel! Nostrum quo beatae suscipit.</p>
                <Typed
                    strings={['Are you ready?']}
                    typeSpeed={80}
                    loop
                    backSpeed={80}
                    className="tipeo text-capitalize"
                    />
            </div>
        </div>
    )
}