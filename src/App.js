import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import About from "./componentes/03-About/About.jsx";
import Course from "./componentes/04-Cursos/Course.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Testimonials from "./componentes/05-Testimonials/Testimonials.jsx";


function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Course/>
      <Testimonials/>
    </>
  );
}

export default App;
