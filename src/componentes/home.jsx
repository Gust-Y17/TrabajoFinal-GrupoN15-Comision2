import { Row,Col,Card,Button, Container } from "react-bootstrap"
import ItemProducto from "./ItemProducto"
import { useState} from "react"
//import useAutorisacion from "../hook/useAutorisacion";
import { useContext } from "react";
import { ProductosContext } from "../contexts/Productos";

const Home = () => {
   const {productosAPI, eliminarProd,editProducto}= useContext(ProductosContext)

   const [EditProd,SetEditProd] = useState(null);
 const handleEditar = (prod) =>{
    SetEditProd(prod)
 }

 const guardarEdicion = (prodEditado) => {
    editProducto(prodEditado);
    SetEditProd(null); 
 };

    return(

        <Container>
        <h1>PAGINA HOME</h1>
        {productosAPI.length === 0 ? (
        <h2>NO HAY PRODUCTOS DISPONIBLES...</h2>) :
         (
            <Row>
        {productosAPI.map((prod) => (
                 <Col key={prod.id}>
                    <Card>

                 {EditProd?.id === prod.id? (
                    <ItemProducto 
                     productosAPI={EditProd}
                    onGuardar={guardarEdicion}
                        onCancelar={() => SetEditProd(null)}
                    />) : (
                     <Card.Body>
                        <Card.Title>Producto: {prod.title}</Card.Title>
                        <Card.Title>Precio: {prod.price}</Card.Title>
                        <Card.Img src={prod.image}/>
                        <div className="boton"> 
                            <Button onClick={() => handleEditar(prod)}>EDITAR</Button>    
                             <Button onClick={() => eliminarProd(prod.id)}>Eliminar</Button>
                            </div>
                     </Card.Body>
                    )
                 }
                    </Card>

                 </Col>
    ))}
    </Row>
)}
</Container>
);
};           
                 
               
export default Home