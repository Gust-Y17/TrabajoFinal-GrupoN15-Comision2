import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorito from './componentes/favorito';
import ProductosForm from './componentes/ProductosForm.jsx'
import Home from './componentes/home';
import NavBar from "./componentes/NavBar"; 
import "./estilos/App.css";
import Error from './vistas/Error.jsx';
import About from './componentes/About-us.jsx';
import LoginHome from './componentes/LoginHome.jsx';
import  ProductoCard from './componentes/ProductoCard.jsx';
import Footer from './vistas/Footer.jsx';
 import { FavoritoProvider } from './contexts/FavoritosContext.jsx'; 

const App = () => {

  return (
    <>
    
    <FavoritoProvider>    //con FavoritoProvider funciona con conjunto a las otras funciones
       <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/favoritos" element={<Favorito />} />
        <Route path="/ProductoCard" element={<ProductoCard />} />
        <Route path="/crear-producto" element={<ProductosForm/>} />
        <Route path='*' element={<Error />} />
        <Route path="/About-Us" element={<About />} />
      </Routes>
      <Footer/>
      </div>
      </FavoritoProvider>
     </>
  );
};

export default App;
