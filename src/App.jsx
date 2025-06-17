import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorito from './componentes/favorito';
import ProductosForm from './componentes/ProductosForm.jsx'
import Home from './componentes/home'
import NavBar from "./componentes/NavBar";
  import "./App.css";
 import Error from './vistas/Error.jsx';
import About from './componentes/About-us.jsx';
import LoginHome from './componentes/LoginHome.jsx';

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/favoritos" element={<Favorito />} />
        <Route path="/crear-producto" element={<ProductosForm/>} />
        <Route path='*' element={<Error />} />
         <Route path="/About-Us" element={<About/>}/>
      </Routes>
    </>
  );
};

export default App;
