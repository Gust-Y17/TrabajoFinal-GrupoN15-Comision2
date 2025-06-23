import { Button } from 'react-bootstrap';
import "../estilos/FormularioProducto.css";

function FormularioProducto({ formData, onChange, onSubmit, onCancel, modo }) {
  return (
    <div className="formulario-pagina d-flex justify-content-center align-items-center py-4">
      <div className="formulario-contenedor w-100" style={{ maxWidth: "500px" }}>
        <form onSubmit={onSubmit} className="needs-validation text-center" noValidate>
          <input
            className="form-control mb-3"
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="nombre del producto"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
            required
          />
          <div className="invalid-feedback mb-2">
            introducir solo letras. Este campo es obligatorio
          </div>

          <input
            className="form-control mb-3"
            type="number"
            name="price"
            value={formData.price}
            onChange={onChange}
            placeholder="precio"
            min="0"
            step="0.01"
            required
          />
          <div className="invalid-feedback mb-2">
            introducir solo numeros mayores a 0. Este campo es obligatorio
          </div>

          <select
            className="form-control mb-3"
            name="category"
            value={formData.category}
            onChange={onChange}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>

          <textarea
            className="form-control mb-3"
            name="description"
            value={formData.description}
            onChange={onChange}
            placeholder="descripcion del producto"
            pattern="^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)[A-Za-zÁÉÍÓÚáéíóúÑñ\d\s]+$"
            rows="3"
            required
          />

          <input
            className="form-control mb-3"
            type="file"
            name="image"
            accept="image/*"
            onChange={onChange}
          />

          <div className="d-flex justify-content-center gap-2 mt-3">
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
