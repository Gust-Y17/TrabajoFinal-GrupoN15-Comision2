import { Accordion } from "react-bootstrap";
import "../estilos/Footer.css"
const Footer = () => {
    
  return(
     <footer id="contactanos"className="footer">
      <div className="footer-left">
        <div className="contact-item">
          <img src="/gmail.png" alt="Gmail Icon" className="icon" />
          <div>
            <p>@uriel.b.zambrano@gmail.com</p>
            <p>@leandroquiroga669@gmail.com</p>
            <p>@gg1904105@gmail.com</p>
            <p>@juanponzetti5@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <img src="/ubicacion.png" alt="Ubicación Icon" className="icon" />
          <a
            href="https://www.google.com/maps/place/Facultad+de+Ingeniería+-+UNJu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facultad de Ingeniería - UNJu
            <p>&copy;2025</p>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <h4>SOBRE ESTA PAGINA</h4>
        <p>
          Esta aplicación permite gestionar productos de forma completa: crear,
          editar, eliminar y visualizar. Además, incluye un sistema de
          favoritos, validación de formularios, navegación entre secciones como el Home 
          donde contiene los items en formato Cards traido de una API externa, 
          la pagina de favoritos donde se visualizan los items marcados como favoritos en el Home 
          , una pagina para crear los productos y una pagina "Sobre Nosotros" donde se muestra info de los integrantes de este grupo
        .Todo dentro de una experiencia amigable y moderna.
        </p>
      </div>
    </footer>
                       )
}

export default Footer;