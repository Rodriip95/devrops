import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './desing.scss'

export default function Desing(){
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Top")
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <>
        <div id="home" className="herodesing">
            <div className="fondods">
            </div>
            <div className="border d-flex justify-content-center">
                <div className="contenido">
                    <h1 className="py-3">Curso de Diseño Web</h1>
                    <p>Aprende a crear paginas webs para todos los dispositivos</p>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Clases en vivo</span>
                    </div>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Corrección de trabajos</span>
                    </div>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Desafios reales</span>
                    </div>
                    <div className="mt-4">
                        <a className="btnIncription" href="#inscription">
                            Inscribirme
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            
            <div className="row mb-4">
                <div className="col-12 col-md-6 mt-4">
                    <div className="acercadelcurso">
                        <h1>Acerca del curso</h1>
                        <div className="lineaverde mb-4"></div>
                        <p>Aprenderemos a crear y diseñar una pagina web, las bases del desarrollo Front-end. Aprenderemos desde 0, las interfaces y componentes que conforman una web, el objetivo es realizar proyectos y trabajarlos de manera profesional.</p>
                        <p className="mt-3">Requisitos:</p>
                        <div>
                            <i class="fas fa-laptop"></i>
                            <span>Computadora o Notebook con acceso a internet</span>
                        </div>
                        <div>
                            <i class="far fa-times-circle"></i>
                            <span>No se necesitan conocimientos previos</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-4">
                    <div className="text-center">
                        <img src={"/assests/svg/desing.svg"} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="temario">Temario del curso</h1>
                    <div className="lineaverde mb-3"></div>
                </div>
                <div className="row temariodesc">
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 1:</strong> Conociendo una Web</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 2:</strong> Estructura y lenguaje HTML</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 3:</strong> Estilos en CSS</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 4:</strong> Flexbox y posicionamientos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 5:</strong> Animaciones</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 6:</strong> La Web en telefonos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 7:</strong> Bootstrap</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 8:</strong> Proyectos</p>
                    </div>
                </div>

                <div id="inscription" className="my-5">
                    <div>
                        <h1 className="temario">Próxima fecha:</h1>
                        <div className="lineaverde mb-3"></div>
                    </div>
                    <div className="horarios">
                        <p style={{textDecoration: 'line-through red'}}><strong>Junio:</strong> 28/06 al 04/08</p>

                        <p><strong>Septiembre:</strong> 07/09 al 14/10</p>
                        <p><strong>Horarios:</strong> Martes y Jueves de 20:30 a 22:30 hs</p>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link className="btnIncription" to="/design/inscription">
                            Inscribirme
                        </Link>
                    </div>
                </div>

            </div>

        </div>

        </>
    )
}