import React from "react";
import './course.scss'

export default function Course(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 border d-flex justify-content-center">
                    <div className="w-75 border carta-curso d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex justify-content-end">
                                    <div className="online">
                                        <div className="punto-rojo"></div>
                                        <span className="clases">CLASES EN VIVO</span>
                                    </div>
                                </div>
                                <h2 className="text-center">Diseño Web</h2>
                            </div>
                            <div>
                                <p>6 semanas</p>
                                <p>Cupos limitados</p>
                                <p>$4999</p>
                                <a href="#">Ver</a>
                            </div>  
                        </div>
                </div>

                <div className="col-12 col-md-6 border d-flex justify-content-center">
                    <div className="w-75 border carta-curso d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex justify-content-end">
                                    <div className="online">
                                        <div className="punto-rojo"></div>
                                        <span className="clases">CLASES EN VIVO</span>
                                    </div>
                                </div>
                                <h2 className="text-center">Programación Web</h2>
                            </div>
                            <div>
                                <p>6 semanas</p>
                                <p>Cupos limitados</p>
                                <p>$4999</p>
                                <a href="#">Ver</a>
                            </div>  
                        </div>
                </div>
            </div>
        </div>
    )
}