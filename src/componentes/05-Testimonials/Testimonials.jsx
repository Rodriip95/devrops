import React, { useState } from "react";
import "./testimonials.scss"

export default function Testimonials() {
    const [comments, setComments] = useState([
        {
            name: "Manu Brandan",
            comment: "Fueron semanas de puro aprendizaje, con ejercicios divertidos y fáciles de entender por lo bien abordados los temas. Gracias por la paciencia y dedicación.",
            image: "manu.jpeg"
        },
        {
            name: "Simon Perez",
            comment: "Mi experiencia personal dentro del curso fue de muchísima utilidad ya que aprendí desde la introducción al mundo del desarrollo web con sus bases en HTML y CSS. Lo recomiendo!!",
            image: "simon.jpeg"
        },
        {
            name: "Gaston Steck",
            comment: "El curso es muy recomendable y muy fácil de seguir clase a clase, esta bien estructurado para que aprendas desde el comienzo!",
            image: "gaston.jpeg"
        },
        {
            name: "Imanol Vega",
            comment: "Super recomendado, es un mundo totalmente diferente, ni hablar de las puertas que te abre.",
            image: "ima.jpg"
        },
        {
            name: "Ivan Gomez",
            comment: "Excelente! Buena forma de explicar y mucha paciencia! Logramos el objetivo de crear paginas solos.",
            image: "ivan.jpg"
        },
        
    ])
  return (
      <div id="testimonials" className="sec-testi pt-4">
          <h1 className="text-center">Testimonios</h1>
          <div className="lineaverde"></div>
        <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="carousel"
        >
        <div class="carousel-indicators">
            {comments.map((v, i)=>(
                <button
                    key={i}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={i}
                    class={i == 0? "active flechas" : "flechas"}
                    aria-current={i == 0 && "true"}
                    aria-label={`Slide ${i+1}`}
                    ></button>
            ))}
        </div>
        <div class="carousel-inner">
            {comments.map((value, index)=>
                <div class={index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <Cuadro data={value}/>
                </div>
            )}
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

function Cuadro({data}){
    return(
        <div className="fondo-testi pt-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-circle" style={{width:"200px", height:"200px", overflow: "hidden"}}>
                    <img style={{width: "100%"}} src={`/assests/images/testimonials/${data.image}`}/>
                </div>
                <h3 className="mt-2">{data.name}</h3>
                <div className="w-50 text-center pb-5">
                    <p className="testimonio">{data.comment}</p>
                    <span className="comilla-arriba">"</span>
                    <span className="comilla-abajo">"</span>
                </div>
            </div>
        </div>
    )
}