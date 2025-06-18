import { useContext } from "react"
import { favoritosContext } from "../contexts/FavoritosContext";
const Favorito = () => {
  const {favoritos} = useContext(favoritosContext);   //utiliza usecontext para acceder al  favoritoContxt y saber los productos favoritos

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: "center", color: "lightgray" }}>Favoritos</h1>
      <ul>
        {favoritos.map((product) => (                  //renderiza la lista de favoritos
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorito