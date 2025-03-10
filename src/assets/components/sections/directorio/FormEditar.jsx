import React from 'react';
import style from './FormEditar.module.css'; // Asegúrate de que el archivo CSS esté configurado adecuadamente

const Form = ({ formData, handleInputChange }) => {
    return (
      <form className={style.form}>
        {/* Fila para el puesto */}
        <div className={style.row}>
          <label>Puesto</label>
          <input
            type="text"
            name="puesto"
            value={formData.puesto}
            onChange={handleInputChange}
          />
        </div>
  
        {/* Fila para nombre y apellidos en la misma línea */}
        <div className={style.row}>
          <div className={style.column}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleInputChange}
            />
          </div>
        </div>
  
        {/* Fila para teléfono y extensión en la misma línea */}
        <div className={style.row}>
          <div className={style.column}>
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>Extensión</label>
            <input
              type="text"
              name="extension"
              value={formData.extension}
              onChange={handleInputChange}
            />
          </div>
        </div>
  
        {/* Fila para el correo */}
        <div className={style.row}>
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </div>
  
        <div>
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    );
  };
  
  export default Form;
