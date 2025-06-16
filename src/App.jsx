import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./componentes/favorito";
import ProductForm from "./componentes/FormProducto";
import Home from "./componentes/home";
import NavBar from "./componentes/NavBar";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregar = (nuevoprod) => {
    setProductos([...productos, nuevoprod]);
  };

  const editProducto = (productoEditado) => {
    setProductos(productos.map((pro) =>
      pro.id === productoEditado.id ? productoEditado : pro
    ));
  };

  const eliminarProd = (id) => {
    setProductos(prev => prev.filter(pr => pr.id !== id));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productos={productos}
              onEditar={editProducto}
              onEliminar={eliminarProd}
            />
          }
        />
        <Route path="/favoritos" element={<Favorites />} />
        <Route
          path="/crear-producto"
          element={
            <ProductForm
              addprod={agregar}
              onCancel={() => console.log("cancelado")}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
