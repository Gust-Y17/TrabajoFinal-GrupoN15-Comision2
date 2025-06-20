import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductosContext } from "../contexts/Productos";
import { FavoritosContext } from "../contexts/FavoritosContext"; 
import DetalleProductoModal from "../modales/DetallesProductoModal";
import EditarProductoModal from "../modales/EditarProductoModal";
import useAutorisacion from "../hook/useAutorisacion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Home = () => {
  const { productosAPI, eliminarProd, editProducto } = useContext(ProductosContext);
  const { favoritos, agregarFavorito, eliminarFavorito } = useContext(FavoritosContext); 
  const { user, isAuthenticat } = useAutorisacion();
  
  const esAdmin = isAuthenticat && user?.rol === "ADMINISTRATIVO";
  const [EditProd, SetEditProd] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const esUnicoProducto = productosAPI.length === 1;

  const handleVerDetalle = (prod) => {
    setProductoSeleccionado(prod);
    setShowModal(true);
  };

  const handleCerrarModal = () => {
    setShowModal(false);
    setProductoSeleccionado(null);
  };

  const handleEditar = (prod) => {
    SetEditProd(prod);
  };

  const guardarEdicion = (prodEditado) => {
    editProducto(prodEditado);
    SetEditProd(null);
  };

 return (
    <Container className="contenido-con-espacio">
      <h1 style={{ textAlign: "center", color: "lightgray" }}>FREE SHOP</h1>
      {productosAPI.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "lightgray" }}>NO HAY PRODUCTOS DISPONIBLES...</h2>
      ) : (
        <Row>
          {productosAPI.map((prod) => {
            const isFavorito = favoritos.some((fav) => fav.id === prod.id);
            return (
              <Col
                key={prod.id}
                xs={12}
                sm={esUnicoProducto ? 8 : 6}
                md={esUnicoProducto ? 6 : 4}
                lg={esUnicoProducto ? 4 : 3}
                className={`mb-4 ${esUnicoProducto ? 'mx-auto' : ''}`}
              >
                <Card className="position-relative h-100 shadow-sm">
                  {/* --- BOTÓN DE FAVORITOS CON REACT ICONS --- */}
                  <button
                    className={`btn position-absolute top-0 end-0 m-2 ${
                      isFavorito ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => 
                      isFavorito ? eliminarFavorito(prod.id) : agregarFavorito(prod)
                    }
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none"
                    }}
                  >
                    {isFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                  </button>

                  <Card.Img variant="top" src={prod.image} alt={prod.title} />
                  <Card.Body>
                    <Card.Title>Producto: {prod.title}</Card.Title>
                    <Card.Title>Precio: ${prod.price}</Card.Title>

                    <div className="card-acciones">
                      {esAdmin && ( 
                        <>
                          <Button 
                            size="sm" 
                            variant="warning" 
                            onClick={() => handleEditar(prod)}
                          >
                            Editar
                          </Button>
                          <Button 
                            size="sm" 
                            variant="danger" 
                            onClick={() => eliminarProd(prod.id)}
                            className="ms-2"
                          >
                            Eliminar
                          </Button>
                        </>
                      )}
                      <Button 
                        size="sm" 
                        variant="info" 
                        onClick={() => handleVerDetalle(prod)}
                        className={esAdmin ? "mt-2" : ""}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
      <DetalleProductoModal
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