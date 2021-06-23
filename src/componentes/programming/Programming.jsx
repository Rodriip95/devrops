import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './programming.scss'
{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLnQdK0Am2DJkin1F9JfmnHNPV_GvlZy8ogtQtYjQS2qVWNQ/viewform?embedded=true" width="640" height="1307" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> */}

export default function Programming(){
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
                    <h1 className="p-3">Curso de Programacion Web</h1>
                    <p>Aprende a programar aplicaciones web</p>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Clases en vivo</span>
                    </div>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Correccion de trabajos</span>
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
                        <p>Aprenderemos las bases de la programación y el desarrollo en Javascript (el lenguaje interpretado por los browsers), el objetivo es realizar aplicaciones y aplicar lo aprendido.</p>
                        <p className="mt-3">Requisitos:</p>
                        <div>
                            <i class="fas fa-laptop"></i>
                            <span>Computadora o Notebook con acceso a internet</span>
                        </div>
                        <div>
                            <i class="fab fa-html5"></i>
                            <span>Conocimientos minimos de HTML, los veremos en el programa por sin entrar en detalles</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-4">
                    <div className="text-center">
                        <img src={"/assests/svg/js.svg"} alt="" />
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
                        <p><strong>Modulo 1:</strong> Introducción a la programación en Javascript</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 2:</strong> Operadores y Metodos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 3:</strong> Condicionales y Ciclos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 4:</strong> Funciones</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 5:</strong> Colecciones de datos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 6:</strong> DOM</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 7:</strong> Integraciones con APIs</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p><strong>Modulo 8:</strong> Proyectos</p>
                    </div>
                </div>

                <div id="inscription" className="my-5">
                    <div>
                        <h1 className="temario">Proxima fecha:</h1>
                        <div className="lineaverde mb-3"></div>
                    </div>
                    <div className="horarios">
                        <p><strong>Junio:</strong> 29/06 al 05/08</p>
                        <p><strong>Horarios:</strong> Martes y Jueves de 20:30 a 22:30 hs</p>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link className="btnIncription" to="/programming/inscription">
                            Inscribirme
                        </Link>
                    </div>
                </div>

            </div>

        </div>

        </>
    )
}