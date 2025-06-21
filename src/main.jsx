import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos/index.css'
import App from "./App"
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AutorisaProvider } from './contexts/AutorisacionContext.jsx';
import { ProductosProvider} from './contexts/Productos.jsx'
import { FavoritoProvider } from './contexts/FavoritosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <AutorisaProvider>
        <ProductosProvider>
          <FavoritoProvider> 
            <App />
          </FavoritoProvider>
        </ProductosProvider>
      </AutorisaProvider>
    </BrowserRouter>
  </StrictMode>
);
