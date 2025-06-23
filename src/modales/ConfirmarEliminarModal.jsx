import { Modal, Button } from "react-bootstrap";

const ConfirmarEliminarModal = ({ show, handleClose, onConfirmar, mensaje = "¿Estás seguro de que querés eliminar esto?" }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="sm">
      <Modal.Header >
        <Modal.Title className="text-danger">Confirmar eliminación</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-light text-center">
        <p className="text-muted">{mensaje}</p>
      </Modal.Body>

      <Modal.Footer className="bg-light d-flex justify-content-center gap-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirmar}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmarEliminarModal;
