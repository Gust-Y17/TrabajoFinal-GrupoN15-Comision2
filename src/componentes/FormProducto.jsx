import { useState, useEffect } from 'react';
import FormularioProducto from '../vistas/FormularioProducto';

function ProductosForm({ addprod, product = null, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      alert('Título y precio son obligatorios');
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: product ? product.id : Date.now()
    };

    addprod(productData);

    // Limpia si es creación, no si edita
    if (!product) {
      setFormData({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
      });
    }
  };

  return (
    <FormularioProducto
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      modo={product ? 'editar' : 'crear'}
    />
  );
}

export default ProductosForm;
