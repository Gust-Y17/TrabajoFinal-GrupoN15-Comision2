import { Modal, Button } from 'react-bootstrap';

const DetalleProductoModal = ({ show, handleClose, producto }) => {
  if (!producto) return null;

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton className="bg-light">
        <Modal.Title className="text-primary">
          {producto.title || 'Sin título'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-light">
        <div className="text-center">
          <img
            src={producto.image}
            alt={producto.title}
            className="img-fluid rounded mb-3"
            style={{ maxHeight: '250px', objectFit: 'contain' }}
          />
          <p className="text-dark fw-bold fs-5">
            Precio: <span className="text-success">${producto.price}</span>
          </p>
          <p className="text-muted">{producto.description}</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-light">
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetalleProductoModal;
