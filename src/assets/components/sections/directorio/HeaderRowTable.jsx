// HeaderRow.jsx.";

import style from "./Directorio.module.css";

const HeaderRowTable = () => {
  return (
    <div className={style.headerRowTable}>
      <div className={style.puesto}>Puesto</div>
      <div className={style.nombre}>Nombre</div>
      <div className={style.apellidos}>Apellidos</div>
      <div className={style.telefono}>Teléfono</div>
      <div className={style.extension}>Extensión</div>
      <div className={style.correo}>Correo</div> 
    </div>
  );
};

export default HeaderRowTable;