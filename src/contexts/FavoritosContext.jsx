import {createContext, useState } from "react";
import { useEffect } from "react";
import { set } from "react-hook-form";

export const FavoritosContext = createContext();

export const FavoritoProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState(() =>{
        try{
        const saved = localStorage.getItem("favoritos");
        return saved ? JSON.parse(saved) : [];
    } catch (error){
        console.error("Error al cargar favoritos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
    });

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
      }, [favoritos]);

const agregarFavorito = (product) => {
    if (!favoritos.some((fav) => fav.id === product.id)) {
      setFavoritos([...favoritos, product]);
    }
};

const eliminarFavorito = (target) => {
  const id = typeof target === "object" ? target.id : target;
  setFavoritos(favoritos.filter(producto => producto.id !== id));
};

return(
    <FavoritosContext.Provider value={{favoritos, agregarFavorito, eliminarFavorito}}>{children}</FavoritosContext.Provider>
);
};
 