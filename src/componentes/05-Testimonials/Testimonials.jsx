import React, { useState } from "react";
import "./testimonials.scss"

export default function Testimonials() {
    const [comments, setComments] = useState([
        {
            name: "Manu Brandan",
            comment: "Fueron semanas de puro aprendizaje, con ejercicios divertidos y fáciles de entender por lo bien abordados los temas. Gracias por la paciencia y dedicación",
            image: "manu.jpeg"
        },
        {
            name: "Manu Brandan",
            comment: "Fueron semanas de puro aprendizaje, con ejercicios divertidos y fáciles de entender por lo bien abordados los temas. Gracias por la paciencia y dedicación",
            image: "manu.jpeg"
        },
        {
            name: "Manu Brandan",
            comment: "Fueron semanas de puro aprendizaje, con ejercicios divertidos y fáciles de entender por lo bien abordados los temas. Gracias por la paciencia y dedicación",
            image: "manu.jpeg"
        },
        {
            name: "Manu Brandan",
            comment: "Fueron semanas de puro aprendizaje, con ejercicios divertidos y fáciles de entender por lo bien abordados los temas. Gracias por la paciencia y dedicación",
            image: "manu.jpeg"
        },
        
    ])
  return (
      <div className="sec-testi pt-4">
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
                <img src={`/assests/images/testimonials/${data.image}`} className="rounded-circle bg-success" style={{width:"200px", height:"200px"}}/>
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