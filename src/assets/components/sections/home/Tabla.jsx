import React from "react";
import style from "./Tabla.module.css";
import PropTypes from "prop-types"; // Para validar los tipos de las props

// Componente TablaDirectorio
const TablaDirectorio = ({ headers, data }) => {
  return (
    <div className={style.table-container}>
      <div className={style.headerRowTable}>
        {headers.map((header, index) => (
         <div key={index} className={style[`Header${header.toLowerCase()}`]}>
            {header}
          </div>
        ))}
      </div>
      <div className={style.containerListRow}>
        {data.map((row, index) => (
          <div key={index} className={style.containerFila}>
            {Object.values(row).map((cell, cellIndex) => (
              <div key={cellIndex} className={style.cell}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Definir los tipos de las props para validación
TablaDirectorio.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired, // Encabezados de la tabla
  data: PropTypes.arrayOf(PropTypes.object).isRequired,  // Datos de la tabla (filas)
};

export default TablaDirectorio;
