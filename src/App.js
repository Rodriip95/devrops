import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import Hero from "./componentes/02-Hero/Hero.jsx";
import About from "./componentes/03-About/About.jsx";
import Course from "./componentes/04-Cursos/Course.jsx";
import Faq from "./componentes/05-Faq/Faq.jsx";
import Contact from "./componentes/06-contact/contact.jsx";
import Testimonials from "./componentes/05-Testimonials/Testimonials.jsx";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Course/>
      <Testimonials/>
      <Faq/>
      <Contact/>
    </>
  );
}

export default App;
