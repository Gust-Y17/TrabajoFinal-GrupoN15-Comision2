import React from "react";
import { Link } from "react-router-dom";

const ProductoCard = ({ product, isFavorite, onToggleFavorite }) => {
  const handleFavotiteClick = (e) => {
    e.preventDefault();
    onToggleFavorite(product.id);
  };

  return (
    <div className="">
      <div className=""> //estilo a agregar
        //imagen del producto
        <img src={product.image} className="" alt={product.title} style={{}} />

        //boton de favorito
        <button
          className={`btn position-absolute top-0 end-0 m-2 ${
            isFavorite ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={handleFavotiteClick}
          style={{
            borderRadius: "50%",
            width: "40%",
            height: "40%",
          }}
        ></button>
      </div>

      <div className=""> //las categorias
        <span className="badge bg-security mb-2 align-self-start">
          {product.category}
        </span>

        //titulo de los productos
        <h5
          className="card-title"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.3",
            height: "3.6rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </h5>

        <p
          className="card-text flex-grow-1"
          style={{
            fontSize: "0.9rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
          }}
        >
          {product.description}
        </p>

        //precio de producto
        <div className="mb-3">
          <span className="h4 text-primary">${product.price}</span>
        </div>

        //ver detalle del producto
        <Link to={`/productos/${product.id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductoCard;