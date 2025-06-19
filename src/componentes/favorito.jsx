import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";

const Favorito = () => {
  const { favoritos } = useContext(FavoritosContext); // acceder a los favoritos

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: "center", color: "lightgray" }}>Favoritos</h1>

      {favoritos.length > 0 ? (
        <ul>
          {favoritos.map((product) => (
            <li key={product.id}>
              {product.title} (id: {product.id})
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>No tienes productos favoritos</p>
      )}
    </div>
  );
};

export default Favorito;
