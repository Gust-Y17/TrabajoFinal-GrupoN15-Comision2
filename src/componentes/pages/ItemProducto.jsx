
import {  useState } from "react";
import { Button } from "react-bootstrap";
const ItemProducto = ({producto, onGuardar,onCancelar}) => {

    const [prodEditado,setProdEdtado] = useState({...producto})

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

return(
<div>
    <h4>EDITANDO PRODUCTO......</h4>
     
      <form onSubmit={handleSubmit} className='needs-validation' noValidate>
         <input
            className="form-control"
            type="text"
            name="title"
            value={prodEditado.title}
            onChange={handleChange}
            placeholder="nombre del producto"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
             
          />
          <div className='invalid-feedback'>
            introducir solo letras. Este campo es obligatorio
          </div>
 
           
          <input
            className="form-control"
            type="number"
            name="price"
            value={prodEditado.price}
            onChange={handleChange}
            placeholder="precio"
            min="0"
             step="0.01"
             
          />
          <div className='invalid-feedback'>
            introducir solo numeros mayores a 0. Este campo es obligatorio
          </div>
 
        
           <select
            className="form-control"
            name="category"
            value={prodEditado.category}
            onChange={handleChange}
            placeholder="categoria"
             
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
            value={prodEditado.description}
            onChange={handleChange}
            placeholder="descripcion del producto"
             pattern="^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)[A-Za-zÁÉÍÓÚáéíóúÑñ\d\s]+$"
            rows="3"
         
          />
        
            
           <input
            className="form-control"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
           
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