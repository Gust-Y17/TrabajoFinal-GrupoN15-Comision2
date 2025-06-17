import { useContext } from "react";
import { AutorisacionContext } from "../contexts/AutorisacionContext";

function useAutorisacion() {
    const context = useContext(AutorisacionContext);
    if (context === null) {
        throw new Error("useAutorisacion debe ser usado dentro de un autorisaProvider");
    }
    return context;
}

export default useAutorisacion;
