import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FavoritosContext } from "../contexts/FavoritosContext";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import DetalleProductoModal from "../modales/DetallesProductoModal";
import "../estilos/ProductoCard.css"
const ProductoCard = ({ product }) => {
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(FavoritosContext);
  const [showModal,setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

   const isFavorito = favoritos.some((fav) => fav.id === product.id);

  const handleFavoriteClick = () => {
    if  (!product?.id) return;
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
    <div className="card h-100 position-relative" style={{ width: "18rem", position: "relative" }}>
      {/* Imagen del producto */}
      <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />

      {/* Botón de favorito */}
      <button
        className={`btn position-absolute top-0 end-0 m-2 ${
          isFavorito ? "btn-danger" :"text-secondary"
        }`}
        onClick={handleFavoriteClick}
         
      >
        {isFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20}/>}
      </button>

      {/* Información del producto */}
      <div className="card-body d-flex flex-column">
        {/* Categoría */}
        <span className="badge bg-secondary mb-2 align-self-start">{product.category}</span>

        {/* Título */}
        <h5
          className="card-title"
        >
          {product.title}
        </h5>

        {/* Descripción */}
        <p
          id="description"
          className="card-text flex-grow-1"
        >
          {product.description}
        </p>

        {/* Precio */}
        <div className="mt-auto">
        <div className="mb-3">
          <span className="h4 text-primary">${product.price}</span>
        </div>

        <Button 
             size="sm" 
              variant="info"
             onClick={() => handleVerDetalle(product)}
        >
             Ver Detalles
        </Button>
        {/* Ver detalles */}
        <DetalleProductoModal
        show={showModal}
        handleClose={handleCerrarModal}
        producto={productoSeleccionado}
      />
      </div>
      </div>
    </div>
  );
};

export default ProductoCard;
