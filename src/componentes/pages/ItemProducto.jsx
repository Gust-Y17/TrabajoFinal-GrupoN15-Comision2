import {  useState } from "react";
import { Button } from "react-bootstrap";
const ItemProducto = ({productos, onGuardar,onCancelar}) => {

    const [prodEditado,setProdEdtado] = useState({...productos})

    const handleChange = (e) => {
        const {name, value} = e.target
        setProdEdtado({
            ...prodEditado,
            [name]:value
        });
    };

    const handleSubmit = (e) => {
        e.preventDeFault();
        const form = e.target;
          if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    onGuardar(setProdEdtado)

  };

return(
<div>
    <h4>EDITANDO PRODUCTO......</h4>
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        
        <input
            type="text"
            name="title"
            value={prodEditado.title}
            onChange={handleChange}
            required
          />
 
           <label>Precio *</label><br />
          <input
            type="number"
            name="price"
            value={prodEditado.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
 
        
          <label>Categoría</label><br />
          <select
            name="category"
            value={prodEditado.category}
            onChange={handleChange}
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        

        
          <label>Descripción</label><br />
          <textarea
            name="description"
            value={prodEditado.description}
            onChange={handleChange}
            rows="3"
          />
        
          <label>URL de la imagen</label><br />
          <input
            type="url"
            name="image"
            value={prodEditado.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
    <div>
        <Button variant="primary" type="submit" >GUARDAR</Button>
        <Button variant="danger" type="button" onClick={onCancelar}>CANCELAR</Button>
    </div>

        </form> 
</div>

)


}

export default ItemProducto;