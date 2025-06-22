import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAutorisacion from "../hook/useAutorisacion";

const Error = () => {
  const { isAuthenticat } = useAutorisacion();
  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Ups... La página que buscás no existe.</p>
      <Button as={Link} to={isAuthenticat ? "/home" : "/"} variant="primary">
        Volver al inicio
      </Button>
    </div>
  );
};

export default Error;