import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
//import Home from './componentes/pages/home'
import Favorites from './componentes/pages/favorito'
import ProductForm from './componentes/pages/FormProducto'

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Inicio</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/crear-producto" style={{ marginLeft: '20px' }}>Crear Producto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/crear-producto" element={
            <ProductForm 
              onSave={(productData) => {
                console.log('Producto creado:', productData)
              }}
              onCancel={() => {
                console.log('Cancelado')
              }}
            />
          } />
          <Route path="/editar-producto/:id" element={
            <ProductForm 
              product={null}
              onSave={(productData) => {
                console.log('Producto editado:', productData)
              }}
              onCancel={() => {
                console.log('Edición cancelada')
              }}
            />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
