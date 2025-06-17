
import { useState } from 'react'
import { Button } from 'react-bootstrap'
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
  })

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
}
  
      const resetForm = () => {
        setFormData({
             title: '',
        price: '',
        description: '',
        category: '',
        image: ''
        })
      }

   const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
   
          if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    // crea objeto producto
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: product ? product.id : Date.now()
    }

    agregar(productData)
    resetForm();
    form.classList.remove('was-validated');
  }



  return (
    <div>
       
      <form onSubmit={handleSubmit} className='needs-validation' noValidate>
         <input
            className="form-control"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="nombre del producto"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
            required
          />
          <div className='invalid-feedback'>
            introducir solo letras. Este campo es obligatorio
          </div>
 
           
          <input
            className="form-control"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="precio"
            min="0"
             step="0.01"
            required
          />
          <div className='invalid-feedback'>
            introducir solo numeros mayores a 0. Este campo es obligatorio
          </div>
 
        
           <select
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="categoria"
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        

        
           <textarea
             className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="descripcion del producto"
             pattern="^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)[A-Za-zÁÉÍÓÚáéíóúÑñ\d\s]+$"
            rows="3"
            required
          />
        
           <input
            className="form-control"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        <div>
          <Button variant="primary" type="submit" >GUARDAR</Button>
          <Button variant="danger" onClick={() => { resetForm(); } }>Cancelar </Button>
        </div>
      </form>
    </div>
  )
}

export default ProductosForm
