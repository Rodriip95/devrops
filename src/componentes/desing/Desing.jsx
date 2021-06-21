import React from 'react'
import { Link } from 'react-router-dom'
import './desing.scss'
{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLnQdK0Am2DJkin1F9JfmnHNPV_GvlZy8ogtQtYjQS2qVWNQ/viewform?embedded=true" width="640" height="1307" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> */}

export default function Desing(){
    return(
        <>
        <div className="herodesing">
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
                        <span>Correccion de trabajos</span>
                    </div>
                    <div className="icontexts">
                        <i class="fas fa-check"></i>
                        <span>Desafios reales</span>
                    </div>
                    <div>
                        <Link to="/desing/inscription">
                            Inscribirme
                        </Link>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            
            <div className="row mb-4">
                <div className="col-12 col-md-6 mt-4">
                    <div>
                        <h1>Acerca del curso</h1>
                        <p>Aprenderemos a crear y diseñar una pagina web, las bases del desarrollo Front-end. Aprenderemos desde 0, las intefaces y componentes que conforman una web, el objetivo es realizar proyectos y trabajarlos de manera profesional.</p>
                        <p>Requisitos:</p>
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
                    <div>
                        <img src={"/assests/svg/desing.svg"} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1>Temario del curso</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>Modulo 1: Conociendo una Web</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 2: Estrutura y lenguaje HTML</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 3: Estilos en CSS</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 4: Flexbox y posicionamientos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 5: Animaciones</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 6: La Web en telefonos</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 7: Bootstrap</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Modulo 8: Proyectos</p>
                    </div>
                </div>

                <div>
                    <h1>Proxima fecha:</h1>
                </div>
                <div>
                    <p>Junio: 28/06 al 04/08</p>
                    <p>Horarios: Lunes y Miercoles de 20:30 a 22:30 hs</p>
                </div>
            </div>

        </div>

        </>
    )
}