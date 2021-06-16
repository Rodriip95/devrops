import React from "react";
import "./faq.scss"

function faq(){
    return(
    <div className="container d-flex flex-column align-items-center mb-5">
        <div className="text-center mt-5">
            <h2 className="h2faq"> Preguntas Frecuentes</h2>
        </div>
        <div className="accordion pt-4 w-75" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <p className="pheader">¿Cómo es la modalidad de las clases?</p>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>La modalidad es remota con clases en vivo via Meet. Las clases tienen un horario pactado con cupos limitados para que el feedback sea rapido y en el momento. Se dan conceptos teoricos y se los pone en practica con desafios que se realizan en la misma clase.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <p className="pheader">¿De que me sirve aprender diseño y programación web?</p>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                            Aprender estas tecnologias sirve para crear y programar paginas webs, de estos cursos aprenderemos las bases de la profesion de desarrollador Front-end.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <p className="pheader">¿Despues de estos cursos puedo aplicar a trabajos?</p>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>  
                            Al final de los cursos tendremos una clase donde analizaremos las propuestas laborales para saber a cuales podremos aplicar a futuro y que camino de estudio seguir.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <p className="pheader">¿Cuales son los metodos de pago?</p>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                        Pensando en tu comodidad. Podes abonar mediante transferencia bancaria o Mercado Pago.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
export default faq;    