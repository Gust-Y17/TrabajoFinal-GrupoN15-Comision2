import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FavoritosContext } from "../contexts/FavoritosContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DetalleProductoModal from "../modales/DetallesProductoModal";
import "../estilos/ProductoCard.css"
const ProductoCard = ({ product }) => {
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(FavoritosContext);
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const isFavorito = favoritos.some((fav) => fav.id === product.id);

  const handleFavoriteClick = () => {
    if (!product?.id) return;
    console.log('Producto ${Product.id} - Acción: ${isFavorito ? "Eliminar" : "Agregar"}');
    isFavorito ? eliminarFavorito(product) : agregarFavorito(product);
  };

  const handleVerDetalle = (prod) => {
    setProductoSeleccionado(prod);
    setShowModal(true);
  };


  const handleCerrarModal = () => {
    setShowModal(false);
    setProductoSeleccionado(null);

  };

  return (
    <Card className="shadow-sm h-100 position-relative">
      {/* Imagen del producto */}
      <img src={product.image} className="card-img-top" alt={product.title} />

      {/* Botón de favorito */}
      <button
        className={`btn btn-light rounded-circle position-absolute top-0 end-0 m-2 ${isFavorito ? "text-danger" : "text-secondary"
          }`}
        onClick={handleFavoriteClick}
      >
        {isFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
      </button>

      {/* Información del producto */}
      <Card.Body className="d-flex flex-column">
        {/* Categoría */}
        <Card.Subtitle className="mb-2 text-muted small">{product.category}</Card.Subtitle>

        {/* Título */}
        <Card.Title className="text-center fs-6" style={{ overflow: 'hidden', WebkitBoxOrient: 'vertical' }}>
          {product.title}
        </Card.Title>


        {/* Descripción 
        <Card.Text className="text-muted small" style={{ maxHeight: "3rem", overflow: "hidden" }}>
          {product.description}
        </Card.Text> */}

        <div className="mt-auto">
          {/* Precio */}
          <div className="fw-bold text-primary fs-5 mb-2">${product.price}</div>

          {/* Ver detalles */}
          <Button variant="info" className="w-100" onClick={() => handleVerDetalle(product)}>
            Ver Detalles
          </Button>

          <DetalleProductoModal
            show={showModal}
            handleClose={handleCerrarModal}
            producto={productoSeleccionado}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductoCard;
