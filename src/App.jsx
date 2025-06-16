import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './componentes/pages/favorito'
import ProductForm from './componentes/pages/FormProducto'
import Home from './componentes/pages/home'
 import { useState } from 'react' 
 
const App = () => {
  const [productos, setProductos] = useState([])

  const agregar = (nuevoprod) => {
    setProductos([...productos, nuevoprod])
  }

  const editProducto = (prodEditado) => {
  setProductos(prev =>
    prev.map(p => (p.id === prodEditado.id ? prodEditado : p))
  );
};

  const eliminarProd = (id) => {
    setProductos ((prev) => prev.filter((pr) => pr.id !== id))
  };



  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Inicio</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/crear-producto" style={{ marginLeft: '20px' }}>Crear Producto</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <Home 
            productos={productos}  
            onEditar={editProducto}
            onEliminar={eliminarProd}
            />
          } />

          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/crear-producto" element={
            <ProductForm 
            addprod={agregar}
            />
          } />


          
        </Routes>
      </div>
    </Router>


  )
}

export default App
