import React from "react";
import Typed from 'react-typed';

export default function About(){

    return(
        <div>
            <div>
                <h1>¿Que es Devrops?</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis maxime soluta asperiores officiis aspernatur blanditiis assumenda ipsam placeat nobis neque hic unde, perferendis quis porro corrupti repudiandae vero cumque!</p>

            <Typed
                strings={['Here you can find anything']}
                typeSpeed={40}
                loop
                backSpeed={50}
            />

        </div>
    )
}