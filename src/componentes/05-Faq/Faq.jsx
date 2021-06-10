import React from "react";
import "./faq.scss"

function faq(){
    return(
    <div>

        <div className="accordion container pt-4" id="accordionExample">
            <div className="text-center">
                <h2 className="h2faq"> Preguntas Frecuentes</h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <p className="pheader">¿Cómo es la modalidad de las clases?</p>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Modalidad completamente remota con clases en vivo. El curso esta diseñado con clases en vivo de manera que sean completamente remotas.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <p className="pheader">¿Cuanto dura el curso?</p>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                            El curso dura 14 semanas Con una modalidad de 3 clases por semana.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <p className="pheader">¿Cuales son los metodos de pago?</p>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                            
                        </p>
                        Pensando en tu comodidad. Podes abonar mediante transferencia bancaria o Mercado Pago.
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
export default faq;    