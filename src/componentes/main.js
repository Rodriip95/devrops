import React from 'react'
import Hero from "./02-Hero/Hero.jsx";
import About from "./03-About/About.jsx";
import Course from "./04-Cursos/Course.jsx";
import Faq from "./05-Faq/Faq.jsx";
import Contact from "./06-contact/contact.jsx";
import Testimonials from "./05-Testimonials/Testimonials.jsx";

export default function Main(){
    return(
        <>
            <Hero/>
            <About/>
            <Course/>
            <Testimonials/>
            <Faq/>
            <Contact/>
        </>
    )
}