import { createContext,useState,useMemo,useCallback } from "react";
import dataUser from "../data/usuarios.json";

export const AutorisacionContext = createContext(null);
export function AutorisaProvider({children}) {
    const [user,setUser] = useState(null);
    const [isloading,setIsloading] = useState(false);

    const login = useCallback((credentials) => {
        setIsloading(true); //se activa brevemente y luego se desactiva
        try { 
            const usuarioEncontrado = dataUser.find
            (u => u.username === credentials.username && u.password === credentials.password);
            
        if(usuarioEncontrado) {
            const {password, ...userWithoPassword} = usuarioEncontrado;
            setUser(userWithoPassword);
            setIsloading(false);
            return {success: true};
        } else{
            setUser(null);
            setIsloading(false);
            return {success: false,message:"Credenciales invalidas. Por favor ingrese nuevamente"};
        }

        } catch (error) {
            console.error("Login failed due to unexpected error:", error.message);
            setUser(null);
            setIsloading(false);
            return {success: false,message:"ocurrio un error inesperado durante el login"};
        }

    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const autorisacionContextValue = useMemo(() => ({
        user,
        isAuthenticat : !!user,
        isloading,
        login,
        logout,
    }),[user, isloading, login, logout]);

    return (
        <AutorisacionContext.Provider value={autorisacionContextValue}>
            {children}
        </AutorisacionContext.Provider>
    );
}