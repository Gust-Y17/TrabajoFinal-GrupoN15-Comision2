import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";

const ProductoCard = ({ product }) => {
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(FavoritosContext);

  const isFavorite = favoritos.some((fav) => fav.id === product.id);

  const handleFavoriteClick = () => {
    isFavorite ? eliminarFavorito(product) : agregarFavorito(product);
  };

  return (
    <div className="card p-3 m-2" style={{ width: "18rem", position: "relative" }}>
      {/* Imagen del producto */}
      <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />

      {/* Botón de favorito */}
      <button
        className={`btn position-absolute top-0 end-0 m-2 ${
          isFavorite ? "btn-danger" : "btn-outline-danger"
        }`}
        onClick={handleFavoriteClick}
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
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
        <div className="mb-3">
          <span className="h4 text-primary">${product.price}</span>
        </div>

        {/* Ver detalles */}
        <Link to={`/productos/${product.id}`} className="btn btn-primary mt-auto">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductoCard;
