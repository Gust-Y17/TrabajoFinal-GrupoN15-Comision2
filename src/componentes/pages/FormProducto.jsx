import { useState, useEffect } from 'react'

function ProductosForm({ product = null, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  })

  // Si hay un producto cargar sus datos para editarlos
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        price: product.price || '',
        description: product.description || '',
        category: product.category || '',
        image: product.image || ''
      })
    }
  }, [product])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // validación básica
    if (!formData.title || !formData.price) {
      alert('Título y precio son obligatorios')
      return
    }

    // crea objeto producto
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: product ? product.id : Date.now()
    }

    onSave(productData)
  }

  return (
    <div>
      <h2>{product ? 'Editar Producto' : 'Crear Producto'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título *</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Precio *</label><br />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div>
          <label>Categoría</label><br />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <div>
          <label>Descripción</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div>
          <label>URL de la imagen</label><br />
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>

        <div>
          <button type="submit">
            {product ? 'Actualizar' : 'Crear'}
          </button>
          
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductosForm