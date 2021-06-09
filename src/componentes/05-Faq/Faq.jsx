import React from "react";
import "./faq.scss"

function faq(){
    return(
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ¿Cómo es la modalidad de las clases?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Modalidad completamente remota con clases en vivo.</strong><p>
                    El curso esta diseñado con clases en vivo de manera que sean completamente remotas.
                </p>
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            ¿Cuanto dura el curso?
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>El curso dura 14 semanas</strong> Con una modalidad de 3 clases por semana.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button class="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            ¿Cuales son los metodos de pago?
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>Pensando en tu comodidad.</strong> Podes abonar mediante transferencia bancaria o Mercado Pago.
        </div>
        </div>
    </div>
    </div>
    )
}
export default faq;    