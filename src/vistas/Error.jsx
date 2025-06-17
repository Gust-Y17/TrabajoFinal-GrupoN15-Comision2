import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
    return (
        <div className="text-center py-5">
            <h1 className="display-4">404</h1>
            <p className="lead">Ups... La página que buscás no existe.</p>
            <Button as={Link} to="/home" variant="primary">
                Volver al inicio
            </Button>
        </div>
    );
};

export default Error;