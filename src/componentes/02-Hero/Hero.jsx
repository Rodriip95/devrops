import React from 'react'
import "./hero.scss"

export default function Hero(){
    return(
        <div className="fondo-hero container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 col-lg-6 py-4">
                    <div className="herotexto container text-center d-flex flex-column align-items-center">
                        <h1>Aprende, Comprende, <span className="spanhero">{`<Desafiate/>`}</span></h1>
                        <p>Adéntrate en el mundo de la tecnología y el desarrollo web, aprende desde 0 con proyectos desafiantes.</p>
                        <a href="#about">Info</a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="fondo-relativo d-flex justify-content-center align-items-center">
                        <img src={"/assests/svg/hero.svg"} alt="fondo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}