import { Modal, Button } from 'react-bootstrap';

const DetalleProductoModal = ({ show, handleClose, producto }) => {
  if (!producto) return null;

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>{producto?.title || 'Sin título'}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#f8f9fa' }}>
        {producto ? (
          <>
            <img src={producto.image} alt={producto.title} className="img-fluid mb-3" />
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p>{producto.description}</p>
          </>
        ) : (
          <p>Sin datos</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>

  );
};

export default DetalleProductoModal;