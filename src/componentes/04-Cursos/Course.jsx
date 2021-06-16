import React from "react";
import {Link} from 'react-router-dom'
import './course.scss'

export default function Course(){
    return(
        <>
        <div id="course" className="container-fluid p-0 my-5">
            <div className="title-cont text-center w-100">
                <h1>Cursos</h1>
                <div className="linea"></div>
            </div>
        </div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="w-100 mx-4 mb-5 border carta-curso d-flex flex-column justify-content-between">
                        <div style={{height:"140px"}}>
                                <div className="d-flex justify-content-end">
                                    <div className="online">
                                        <div className="punto-rojo"></div>
                                        <span className="clases">CLASES EN VIVO</span>
                                    </div>
                                </div>
                                <h2 className="text-center">Diseño Web</h2>
                            </div>
                            <div className="p-2">
                                <p>En este desafío aprenderás a crear una página web desde 0, también aprenderás sobre diseños y conceptos que representan un sitio web. Además trabajaremos sobre tu perfil laboral como diseñador.</p>
                                <div className="d-flex flex-row align-items-center mb-2 duration ">
                                    <i class="fas fa-clock"></i>
                                    <span>6 semanas</span>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-2 duration ">
                                    <i class="fas fa-users"></i>    
                                    <span>Cupos limitados</span>
                                </div>
                                <div className="precio d-flex justify-content-center">
                                    <p>$<span>4999</span></p>
                                </div>

                                <div className="btnCurso d-flex justify-content-center">
                                    <Link className="btnlink" to="/curso/design">
                                        <span>Ver</span>
                                    </Link>
                                </div>
                            </div>  
                        </div>
                </div>

                <div className="col-12 col-md-6  d-flex justify-content-center">
                    <div className="w-100 mx-4 mb-5 border carta-curso d-flex flex-column justify-content-between">
                        <div style={{height:"140px"}}>
                            <div className="d-flex justify-content-end">
                                <div className="online">
                                    <div className="punto-rojo"></div>
                                    <span className="clases">CLASES EN VIVO</span>
                                </div>
                            </div>
                            <h2 className="text-center">Programación Web</h2>
                        </div>
                        <div className="p-2">
                            <p>En este desafío veremos la introducción a la programación, aprenderemos a manipular una página web y haremos distintos juegos y programas que útiles para los usuarios.</p>
                            <div className="d-flex flex-row align-items-center mb-2 duration ">
                                <i class="fas fa-clock"></i>
                                <span>6 semanas</span>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2 duration ">
                                <i class="fas fa-users"></i>    
                                <span>Cupos limitados</span>
                            </div>
                            <div className="precio d-flex justify-content-center">
                                <p>$<span>6999</span></p>
                            </div>
                            <div className="btnCurso d-flex justify-content-center">
                                <Link className="btnlink" to="/curso/programming">
                                    <span>Ver</span>
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}