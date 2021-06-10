import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import About from "./componentes/03-About/About.jsx";
import Course from "./componentes/04-Cursos/Course.jsx";
import Faq from "./componentes/05-Faq/Faq.jsx";
import Contact from "./componentes/06-contact/contact.jsx";
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
      <Faq/>
      <Contact/>
    </>
  );
}

export default App;
