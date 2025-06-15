import { Row,Col,Card,Button } from "react-bootstrap"
import ItemProducto from "./ItemProducto"
import { useState} from "react"
const Home = ({productos, onEditar, onEliminar}) => {
 const [EditProd,SetEditProd] = useState(null);

 const handleEditar = (prod) =>{
    SetEditProd(prod)
 }
 
 const guardarEdicion = (prodEditado) => {
    onEditar(prodEditado);
    SetEditProd(null); 
 };

    return(
        <>
        <h1>PAGINA HOME</h1>
        {productos.lenght === 0 ? (
        <h2>NO HAY PRODUCTOS DISPONIBLES...</h2>) :
         (
              productos.map((prod) => (
                 <div key={prod.id}>
                    <h3>{prod.title} {prod.price}</h3>
                 {EditProd?.id === prod.id? (
                    <ItemProducto 
                        producto={EditProd}
                        onGuardar={guardarEdicion}
                        onCancelar={() => SetEditProd(null)}
                    />) : (
                        <div> 
                            <Button onClick={() => handleEditar}></Button>    
                             <Button onClick={() => onEliminar(prod.id)}>Eliminar</Button>
                            </div>
                    )
                 }

                 </div>
    ))
)}
</>
);
};           
                 
               
 
 
 
 
  
export default Home