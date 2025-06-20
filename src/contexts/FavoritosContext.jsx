import {createContext, useState } from "react";

export const FavoritosContext = createContext();

export const FavoritoProvider = ({children}) => {
  
    const [favoritos, setFavoritos] = useState([]);


const agregarFavorito = (product) => {
    setFavoritos([...favoritos, product]);
};

const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter((product) => product.id !== id));
  };

return(
    <FavoritosContext.Provider value={{favoritos, agregarFavorito, eliminarFavorito}}>{children}</FavoritosContext.Provider>
);
};
 