import React, { useState, useEffect } from 'react';
import style from './FormEditar.module.css'; // Asegúrate de que el archivo CSS esté configurado adecuadamente

const FormEditar = ({ formData, handleInputChange, handleSave }) => {
  const [formState, setFormState] = useState(formData);

  useEffect(() => {
    setFormState(formData);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    handleInputChange(event); // Actualizar el estado en el componente padre
  };

  return (
    <form className={style.form} onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      <div className={style.row}>
        <h2 className={style.formTitle}>Editar Persona de Directorio</h2>
      </div>
      {/* Campo oculto para el ID */}
      <input type="hidden" name="id" value={formState.id} />

      {/* Fila para el puesto */}
      <div className={style.row}>
        <label>Puesto</label>
        <input
          type="text"
          name="puesto"
          value={formState.puesto}
          onChange={handleChange}
        />
      </div>

      {/* Fila para nombre y apellidos en la misma línea */}
      <div className={style.row}>
        <div className={style.column}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formState.nombre}
            onChange={handleChange}
          />
        </div>
        <div className={style.column}>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={formState.apellidos}
            onChange={handleChange}
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
            value={formState.telefono}
            onChange={handleChange}
          />
        </div>
        <div className={style.column}>
          <label>Extensión</label>
          <input
            type="text"
            name="extension"
            value={formState.extension}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Fila para el correo */}
      <div className={style.row}>
        <label>Correo</label>
        <input
          type="email"
          name="correo"
          value={formState.correo}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Guardar cambios</button>
      </div>
    </form>
  );
};

export default FormEditar;