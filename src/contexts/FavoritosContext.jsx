import { Children, createContext, useState } from "react";

const favoritosContext = createContext();

const FavoritoProvider = ({Children}) => {
    const [favoritos, setFavoritos] = useState([]);


const agregarFavorito = (product) => {
    setFavoritos([...favoritos, product]);
};

const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter((product) => product.id !== id));
  };

return(
    <favoritosContext.Provider value={{favoritos, agregarFavorito, eliminarFavorito}}>{Children}</favoritosContext.Provider>
);
};
export {favoritosContext, FavoritoProvider};