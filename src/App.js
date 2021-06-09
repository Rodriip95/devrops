import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import About from "./componentes/03-About/About.jsx";
import Course from "./componentes/04-Cursos/Course.jsx";
import Faq from "./componentes/05-Faq/Faq.jsx";
import Contact from "./componentes/06-contact/contact.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Course/>
      <Faq/>
      <Contact/>
    </>
  );
}

export default App;


function Asd(){
  return(
    <Carousel>
        <div style={{width: "200px", height:"200px"}}>
            
            <p className="legend">Legend 1</p>
        </div>
        <div style={{width: "200px", height:"200px"}}>
            
            <p className="legend">Legend 2</p>
        </div>
        <div style={{width: "200px", height:"200px"}}>
            
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
  )
}