
import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext(null)

export const ProductosProvider = ({children}) => {
    const [productosAPI,setProductosAPI]=useState([])

    useEffect(()=>{
        const fetchProductos = async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products")
                if (!response.ok){
                    throw new Error(`Error HTTP:  ${response.status} ${response.statusText}`)
                }
                const data = await response.json();
                setProductosAPI(data)
            } catch (err) {
                console.error("FAllO EN LA CARGA DE PRODUCTOS API:", err)
            }
             
        }
        fetchProductos();
    },[]);

    const agregar = (nuevoprod) => {
        setProductosAPI([...productosAPI, nuevoprod]);
      };
    
      const editProducto = (prodEditado) => {
        setProductosAPI(prev =>
          prev.map(p => (p.id === prodEditado.id ? prodEditado : p))
        );
      };
    
      const eliminarProd = (id) => {
        setProductosAPI(prev => prev.filter(pr => pr.id !== id));
      };

    const prodcontext = {
        productosAPI,
        setProductosAPI,
        eliminarProd,
        editProducto,
        agregar,
    }

return(
    <ProductosContext.Provider value={prodcontext}>{children}</ProductosContext.Provider>
)

}

 
 