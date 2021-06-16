import React from 'react'
import Hero from "./02-Hero/Hero.jsx";
import About from "./03-About/About.jsx";
import Course from "./04-Cursos/Course.jsx";
import Testimonials from "./05-Testimonials/Testimonials.jsx";
import Faq from "./06-Faq/Faq.jsx";
import Contact from "./06-contact/contact.jsx";
import Footer from "./09-Footer/Footer.jsx";


export default function Main(){
    return(
        <>
            <Hero/>
            <About/>
            <Course/>
            <Testimonials/>
            <Faq/>
            <Contact/>
            <Footer/>
        </>
    )
}