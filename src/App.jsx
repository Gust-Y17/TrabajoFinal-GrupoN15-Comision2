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
import Footer from './vistas/Footer.jsx';
import { FavoritoProvider } from './contexts/FavoritosContext.jsx';
import RutaPrivada from './componentes/RutaProtegida.jsx';

const App = () => {

  return (
    <>

      <FavoritoProvider>    //con FavoritoProvider funciona con conjunto a las otras funciones
        <div className='fondo'>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginHome />} />
            <Route path="/About-Us" element={<About />} />
            <Route path='*' element={<Error />} />
              <Route path="/home" element={<Home />} />
              <Route path="/favoritos" element={<Favorito />} />
              <Route element={<RutaPrivada />}>
              <Route path="/crear-producto" element={<ProductosForm />} />
            </Route>
          </Routes>
            <Footer />
        </div>
        
      </FavoritoProvider>
    </>
  );
};

export default App;
