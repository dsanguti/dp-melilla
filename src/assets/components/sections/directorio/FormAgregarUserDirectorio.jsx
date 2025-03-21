import React, { useState } from 'react';
import style from './FormAgregarUserDirectorio.module.css';

const FormAgregarUserDirectorio = ({ handleSave }) => {
  const [formState, setFormState] = useState({
    orden: '',
    puesto: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    extension: '',
    correo: '',
    oficina: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formState);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.row}>
        <h2 className={style.formTitle}>Agregar Persona al Directorio</h2>
      </div>

      {/* Fila para el puesto */}
      <div className={style.row}>
        <div className={style.column}>
        <label>Puesto</label>
        <input
          type="text"
          name="puesto"
          value={formState.puesto}
          onChange={handleChange}
          placeholder="Ingrese el puesto"
          required
        />
        </div>
      </div>

      {/* Fila para el orden */}
      <div className={style.row}>
        <div className={style.column}>
          <label>Orden</label>
          <input
            type="number"
            name="orden"
            value={formState.orden}
            onChange={handleChange}
            placeholder="Ingrese el orden"
            required
          />
        </div>
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
            placeholder="Ingrese el nombre"
            required
          />
        </div>
        <div className={style.column}>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={formState.apellidos}
            onChange={handleChange}
            placeholder="Ingrese los apellidos"
            required
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
            placeholder="Ingrese el teléfono"
            required
          />
        </div>
        <div className={style.column}>
          <label>Extensión</label>
          <input
            type="text"
            name="extension"
            value={formState.extension}
            onChange={handleChange}
            placeholder="Ingrese la extensión"
          />
        </div>
      </div>

      {/* Fila para el correo y oficina en la misma línea */}
      <div className={style.row}>
        <div className={style.column}>
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            value={formState.correo}
            onChange={handleChange}
            placeholder="Ingrese el correo electrónico"
            required
          />
        </div>
        <div className={`${style.column} ${style.oficinaContainer}`}>
          <label>Oficina</label>
          <select
            name="oficina"
            value={formState.oficina}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Empleo">Empleo</option>
            <option value="Prestaciones">Prestaciones</option>
            <option value="D.P.">D.P.</option>
            <option value="COE">COE</option>
          </select>
        </div>
      </div>

      <div>
        <button type="submit">Agregar Persona</button>
      </div>
    </form>
  );
};

export default FormAgregarUserDirectorio;
