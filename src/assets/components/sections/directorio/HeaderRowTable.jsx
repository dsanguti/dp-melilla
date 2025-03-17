// HeaderRow.jsx.";

import style from "./Directorio.module.css";

const HeaderRowTable = ( { profile } ) => {
  console.log("Profile in HeaderRowTable:", profile?.directorio);
  return (
    <div className={style.headerRowTable}>
      {profile?.directorio === "editar" && <div className={style.HeaderOrden}>Orden</div>}
      <div className={style.HeaderPuesto}>Puesto</div>
      <div className={style.HeaderNombre}>Nombre</div>
      <div className={style.HeaderApellidos}>Apellidos</div>
      <div className={style.HeaderTelefono}>Teléfono</div>
      <div className={style.HeaderExtension}>Extensión</div>
      <div className={style.HeaderCorreo}>Correo</div> 
      {profile?.directorio === "editar" && <div className={style.HeaderEditar}>Editar</div>}
    </div>
  );
};

export default HeaderRowTable;