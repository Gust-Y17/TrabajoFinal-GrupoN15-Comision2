import { Button } from 'react-bootstrap';
import "../estilos/FormularioProducto.css"


function FormularioProducto({ formData, onChange, onSubmit, onCancel, modo }) {
  return (
    <div className="formulario-pagina">
      <div className="formulario-contenedor">
        <h4 className="mb-4 text-center">
          {modo === 'editar' ? 'Editando producto...' : 'Crear nuevo producto'}
        </h4>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Título *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Precio *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={onChange}
              step="0.01"
              min="0"
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              name="category"
              value={formData.category}
              onChange={onChange}
              className="form-select"
            >
              <option value="">Seleccionar categoría</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={onChange}
              rows="3"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">URL de la imagen</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={onChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="form-control"
            />
          </div>

          <div className="d-flex gap-2">
            <Button variant="success" type="submit">
              {modo === 'editar' ? 'Actualizar' : 'Crear'}
            </Button>
            <Button variant="secondary" type="button" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioProducto;