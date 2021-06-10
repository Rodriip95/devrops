import React from "react";
import "./testimonials.scss"

export default function Testimonials() {
  return (
      <div className="sec-testi">
        <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="carousel"
        >
        <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active flechas"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="flechas"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="flechas"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <Cuadro/>
            </div>
            <div class="carousel-item">
            <Cuadro/>
            </div>
            <div class="carousel-item">
            <Cuadro/>
            </div>
        </div>
        <button
            class="carousel-control-prev btn-slider"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            >
            <span class="carousel-control-prev-icon flecha-slider" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next btn-slider"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon flecha-slider" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
}

function Cuadro(){
    return(
        <div className="fondo-testi pt-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-circle bg-success" style={{width:"200px", height:"200px"}}></div>
                <h3 className="mt-2">Manu Brandan</h3>
                <div className="w-50 text-center pb-5">
                    <p className="testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum facere. Corporis consequuntur, quam adipisci quasi asperiores numquam minus magni. Ab ratione autem error doloribus et dolor tempore laboriosam nisi?</p>
                    <span className="comilla-arriba">"</span>
                    <span className="comilla-abajo">"</span>
                </div>
            </div>
        </div>
    )
}