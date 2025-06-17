import { Row, Col, Card, Button, Container } from "react-bootstrap"
import { useState } from "react"
import DetallesProductoModal from "../modales/DetallesProductoModal"
import EditarProductoModal from "../modales/EditarProductoModal"
import "../estilos/Home.css"

const Home = ({ productos, onEditar, onEliminar }) => {
  const [EditProd, SetEditProd] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleVerDetalle = (prod) => {
    setProductoSeleccionado(prod);
    setShowModal(true);
  };

  const handleCerrarModal = () => {
    setShowModal(false);
    setProductoSeleccionado(null);
  };


  const handleEditar = (prod) => {
    SetEditProd(prod)
  }

  const guardarEdicion = (prodEditado) => {
    onEditar(prodEditado);
    SetEditProd(null);
  };

  const esUnicoProducto = productos.length === 1;

  return (
    <Container className="contenido-con-espacio">
      <h1 style={{ textAlign: "center", color: "lightgray" }}>PAGINA HOME</h1>
      {productos.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "lightgray" }}>NO HAY PRODUCTOS DISPONIBLES...</h2>) :
        (
          <Row>
            {productos.map((prod) => (
              <Col
                key={prod.id}
                xs={12}
                sm={esUnicoProducto ? 8 : 6}
                md={esUnicoProducto ? 6 : 4}
                lg={esUnicoProducto ? 4 : 3}
                className={`mb-4 ${esUnicoProducto ? 'mx-auto' : ''}`}
              >

                <Card className="position-relative h-100 shadow-sm">
                  {/* Aca esta el check en la ezquina de las cards para el favorito */}
                  <div className="form-check position-absolute top-0 end-0 m-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`check-fav-${prod.id}`}
                      onChange={() => console.log(`Favorito: ${prod.id}`)}
                    />
                    <label className="form-check-label" htmlFor={`check-fav-${prod.id}`}></label>
                  </div>

                  <Card.Img variant="top" src={prod.image} alt={prod.title} />
                  <Card.Body>
                    <Card.Title>Producto: {prod.title}</Card.Title>
                    <Card.Title>Precio: ${prod.price}</Card.Title>

                    <div className="card-acciones">
                      <Button size="sm" variant="warning" onClick={() => handleEditar(prod)}>
                        Editar
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => onEliminar(prod.id)}>
                        Eliminar
                      </Button>
                      <Button size="sm" variant="info" onClick={() => handleVerDetalle(prod)}>
                        Ver Detalles
                      </Button>
                    </div>
                  </Card.Body>
                </Card>

              </Col>
            ))}
          </Row>
        )}

      <DetallesProductoModal
        show={showModal}
        handleClose={handleCerrarModal}
        producto={productoSeleccionado}
      />

      <EditarProductoModal
        show={!!EditProd}
        handleClose={() => SetEditProd(null)}
        producto={EditProd}
        onGuardar={guardarEdicion}
      />

    </Container>
  );
};

export default Home