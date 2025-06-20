import { Button, Card, Container } from 'react-bootstrap';
import "../estilos/ProductosForm.css";
import { useState } from 'react'
 import { useContext } from 'react'
import { ProductosContext } from '../contexts/Productos.jsx';

function ProductosForm ({product = null}) {
  const {agregar}= useContext(ProductosContext);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      const file = files[0];
      const imageURL = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        image: imageURL
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      price: '',
      description: '',
      category: '',
      image: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: product ? product.id : Date.now()
    };

    agregar(productData)
    resetForm();
    form.classList.remove('was-validated');
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow p-4 w-100" style={{ maxWidth: '600px' }}>
        <Card.Title className="mb-4 text-center fs-4 fw-bold">Nuevo Producto</Card.Title>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3 position-relative">
            <input
              className="form-control"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nombre del producto"
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              required
            />
            <div className="invalid-feedback">
              Introducir solo letras.
            </div>
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Precio"
              min="0"
              required
            />
            <div className="invalid-feedback">
              Introducir solo números mayores a 0.
            </div>
          </div>

          <div className="mb-3">
            <select
              className="form-control"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar categoría</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción del producto"
              pattern="^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)[A-Za-zÁÉÍÓÚáéíóúÑñ\d\s]+$"
              rows="3"
              required
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">Guardar</Button>
            <Button variant="secondary" type="button" onClick={resetForm}>Cancelar</Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default ProductosForm;
