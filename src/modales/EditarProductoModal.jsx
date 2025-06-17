import { Modal } from "react-bootstrap";
import ItemProducto from "../componentes/ItemProducto";

const EditarProductoModal = ({ show, handleClose, producto, onGuardar }) => {
  if (!producto) return null;

  const handleCancel = () => {
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemProducto
          producto={producto}
          onGuardar={onGuardar}
          onCancelar={handleCancel}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditarProductoModal;