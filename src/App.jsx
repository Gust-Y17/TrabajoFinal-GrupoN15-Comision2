import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
//import Home from './componentes/pages/home'
import Favorites from './componentes/pages/favorito'
import ProductForm from './componentes/pages/FormProducto'
import Home from './componentes/pages/home'
import ListProducto from './componentes/pages/ListProducto'
import { useState } from 'react' 
function App() {
  const [productos, setProductos] = useState([])

  const agregar = (nuevoprod) => {
    setProductos([...productos, nuevoprod])
  }

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
            />
          } />

          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/crear-producto" element={
            <ProductForm 
            addprod={agregar}
            onCancel={() => 
              console.log("cancelado")
            }
            />
          } />
          
        </Routes>
      </div>
    </Router>


  )
}

export default App
