import { useState } from "react";
import FormularioProducto from "/src/vistas/FormularioProducto"
import { useContext } from 'react'
import { ProductosContext } from '../contexts/Productos.jsx';

const ItemProducto = ({ producto, onGuardar, onCancelar }) => {
  const { productosAPI } = useContext(ProductosContext)
  const [prodEditado, setProdEdtado] = useState({ ...producto })

  const isDuplicate = (field, value) => {
    return productosAPI.some(prod =>
      prod.id !== producto.id &&  //compara id del producto actual con el que estamos editando evitando que el prod actual se considere duplicado de si mismo
      prod[field].toLowerCase() === value.toLowerCase()
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      if (files && files.length > 0) {
        const file = files[0];
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];

        if (!validTypes.includes(file.type)) { //verifica si el tipo "file.type" no está en el array validtypes que contiene las img
          alert('Solo se permiten archivos PNG, JPEG, JPG');// muestra mensaje
          e.target.value = ''; // limpia el valor del input y no permanezca seleccionado
          return; //sale de la funcion evita que continue el procesamiento del formulario
        }

        const imageURL = URL.createObjectURL(file);
        setProdEdtado(prev => ({
          ...prev,
          image: imageURL
        }));
      }
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
    if (isDuplicate('title', prodEditado.title)) {
      alert('Ya existe un producto con ese nombre');
      return;
    }

    if (isDuplicate('description', prodEditado.description)) {
      alert('Ya existe un producto con esa descripción');
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