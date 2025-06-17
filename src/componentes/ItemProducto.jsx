import { useState } from "react";
import FormularioProducto from "/src/vistas/FormularioProducto"

const ItemProducto = ({ producto, onGuardar, onCancelar }) => {

  const [prodEditado, setProdEdtado] = useState({ ...producto })

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      const file = files[0];
      const imageURL = URL.createObjectURL(file);
      setProdEdtado(prev => ({
        ...prev,
        image: imageURL
      }));
    } else {
      setProdEdtado(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    onGuardar(prodEditado)

  };

  return (
    <div>
      <FormularioProducto
        formData={prodEditado}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancelar}
        modo={producto ? 'editar' : 'crear'}
      />
    </div>
  )
}

export default ItemProducto;