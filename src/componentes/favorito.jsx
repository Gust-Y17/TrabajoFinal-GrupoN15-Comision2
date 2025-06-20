import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";
import ProductoCard from "./ProductoCard"; 
import { Container, Row, Col } from "react-bootstrap";

const Favorito = () => {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <Container className="contenido-con-espacio">
      <h1 style={{ textAlign: "center", color: "lightgray" }}>Favoritos</h1>

      {favoritos && favoritos.length > 0 ? (
        <Row className="justify-content-center">
          {favoritos.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductoCard product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <p style={{ textAlign: "center" }}>No tienes productos favoritos</p>
      )}
    </Container>
  );
};

export default Favorito;
