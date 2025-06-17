import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AutorisaProvider } from './contexts/AutorisacionContext.jsx';
import { ProductosProvider} from './contexts/Productos.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutorisaProvider>
      <ProductosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ProductosProvider>
    </AutorisaProvider>
  </StrictMode>,
)

