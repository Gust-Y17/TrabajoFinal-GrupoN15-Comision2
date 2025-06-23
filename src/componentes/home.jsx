import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductosContext } from "../contexts/Productos";
import { FavoritosContext } from "../contexts/FavoritosContext";
import DetalleProductoModal from "../modales/DetallesProductoModal";
import EditarProductoModal from "../modales/EditarProductoModal";
import useAutorisacion from "../hook/useAutorisacion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ConfirmarEliminarModal from "../modales/ConfirmarEliminarModal";

const Home = () => {
  const { productosAPI, eliminarProd, editProducto } = useContext(ProductosContext);
  const { favoritos, agregarFavorito, eliminarFavorito } = useContext(FavoritosContext);
  const { user, isAuthenticat } = useAutorisacion();

  const esAdmin = isAuthenticat && user?.rol === "ADMINISTRATIVO";
  const [EditProd, SetEditProd] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);


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

  const solicitarConfirmacion = (prod) => {
    setProductoAEliminar(prod);
    setShowConfirmModal(true);
  };

  const confirmarEliminacion = () => {
    eliminarProd(productoAEliminar.id);
    setProductoAEliminar(null);
    setShowConfirmModal(false);
  };


  return (
    <Container className="py-4">
      <h1 className="text-center text-secondary mb-4">FREE SHOP</h1>

      {productosAPI.length === 0 ? (
        <h4 className="text-center text-muted">NO HAY PRODUCTOS DISPONIBLES...</h4>
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
                <Card className="h-100 position-relative shadow-sm">
                  {/* --- BOTÓN DE FAVORITOS CON REACT ICONS --- */}
                  <button
                    className={`btn position-absolute top-0 end-0 m-2 ${isFavorito ? "text-danger" : "text-secondary"
                      }`}
                    onClick={() =>
                      isFavorito ? eliminarFavorito(prod) : agregarFavorito(prod)
                    }
                  >
                    {isFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                  </button>

                  <Card.Img variant="top" src={prod.image} alt={prod.title} />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-6 fw-semibold text-center mb-2">
                      Producto: {prod.title}
                    </Card.Title>
                    <Card.Text className="text-center text-primary fw-bold fs-5">
                      ${prod.price}
                    </Card.Text>

                    <div className="mt-auto d-flex flex-wrap justify-content-center gap-2">
                      {esAdmin && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={() => handleEditar(prod)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => solicitarConfirmacion(prod)}
                          >
                            Eliminar
                          </Button>
                        </>
                      )}
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => handleVerDetalle(prod)}
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

      <ConfirmarEliminarModal
        show={showConfirmModal}
        handleClose={() => setShowConfirmModal(false)}
        onConfirmar={confirmarEliminacion}
        mensaje={`¿Eliminar "${productoAEliminar?.title}"?`}
      />

    </Container>
  );

};

export default Home