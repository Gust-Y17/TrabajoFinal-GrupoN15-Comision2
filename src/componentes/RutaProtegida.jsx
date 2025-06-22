import { Navigate, Outlet } from 'react-router-dom';
import useAutorisacion from '../hook/useAutorisacion';

const RutaPrivada = () => {
  const { isAuthenticat } = useAutorisacion();
  return isAuthenticat ? <Outlet /> : <Navigate to="/error" replace />;
};

export default RutaPrivada;
