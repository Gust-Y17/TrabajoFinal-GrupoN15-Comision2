import { Modal } from "react-bootstrap";
import ItemProducto from "../componentes/ItemProducto";
import { useContext } from "react";
import { ProductosContext } from "../contexts/Productos";

const EditarProductoModal = ({ show, handleClose, producto, onGuardar }) => {
  const { productosAPI } = useContext(ProductosContext)
  if (!producto) return null;
  const handleGuardarValidado = (prodEditado) => {
    onGuardar(prodEditado)
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
          productosAPI={productosAPI}
          onGuardar={handleGuardarValidado}
          onCancelar={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditarProductoModal;