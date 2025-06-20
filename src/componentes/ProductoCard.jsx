import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";
import {FaHeart, FaRegHeart} from "react-icons/fa";

const ProductoCard = ({ product }) => {
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(FavoritosContext);
  console.log("Favoritos:", favoritos);
  console.log("Producto:", product.id);

  const isFavorito = favoritos.some((fav) => fav.id === product.id);

  const handleFavoriteClick = () => {
    if  (!product?.id) return;
    console.log('Producto ${Product.id} - Acción: ${isFavorito ? "Eliminar" : "Agregar"}');
    isFavorito ? eliminarFavorito(product) : agregarFavorito(product);
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
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          borderRadius: "50%",
          display: "flex",
          width: "40px",
          height: "40px",
          alignItems: "center",
          justifyContent: "center"
        }}
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
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.3",
            height: "3.6rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical"
          }}
        >
          {product.title}
        </h5>

        {/* Descripción */}
        <p
          className="card-text flex-grow-1"
          style={{
            fontSize: "0.9rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }}
        >
          {product.description}
        </p>

        {/* Precio */}
        <div className="mt-auto">
        <div className="mb-3">
          <span className="h4 text-primary">${product.price}</span>
        </div>

        {/* Ver detalles */}
        <Link to={`/productos/${product.id}`} className="btn btn-primary rm-100">
          Ver detalles
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProductoCard;
