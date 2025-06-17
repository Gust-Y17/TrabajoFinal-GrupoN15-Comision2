
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorito from './componentes/favorito';
import ProductosForm from './componentes/ProductosForm.jsx'
import Home from './componentes/home'
import NavBar from "./componentes/NavBar";
import { useState } from 'react'
import "./App.css";
import Error from './vistas/Error.jsx';
import About from './componentes/About-us.jsx';
import LoginHome from './componentes/LoginHome.jsx';


const App = () => {
  const [productos, setProductos] = useState([]);

  const agregar = (nuevoprod) => {
    setProductos([...productos, nuevoprod]);
  };

  const editProducto = (prodEditado) => {
    setProductos(prev =>
      prev.map(p => (p.id === prodEditado.id ? prodEditado : p))
    );
  };

  const eliminarProd = (id) => {
    setProductos(prev => prev.filter(pr => pr.id !== id));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/home" element={<Home
          productos={productos}
          onEditar={editProducto}
          onEliminar={eliminarProd}
        />
        } />

        <Route path="/favoritos" element={<Favorito />} />
        <Route path="/crear-producto" element={
          <ProductosForm
            addprod={agregar}

          />
        }
        />
        <Route path='*' element={<Error />} />
        <Route path="/About-Us" element={<About />} />
      </Routes>
     </>
  );
};

export default App;
