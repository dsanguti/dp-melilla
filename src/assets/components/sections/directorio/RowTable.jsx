import style from "./Directorio.module.css";
import PuestoField from "./PuestoField";
import NombreField from "./NombreField";
import ApellidosField from "./ApellidosField";
import TelefonoField from "./TelefonoField";
import ExtensionField from "./ExtensionField";
import CorreoField from "./CorreoField";    

const RowTable = ({ puesto, nombre, apellidos, telefono, extension, correo}) => {
  return (
    <div className={style.containerFila}>
      <div className={style.titulo}>
        <PuestoField puesto={puesto} />
      </div>
      <div className={style.nombre}>
        <NombreField nombre={nombre} />
      </div>
      <div className={style.apellidos}>
        <ApellidosField apellidos={apellidos} />
      </div>
      <div className={style.telefono}>
        <TelefonoField telefono={telefono} />
      </div>
      <div className={style.extension}>
        <ExtensionField extension={extension} />
      </div>
      <div className={style.correo}>
        <CorreoField correo={correo} />
      </div>
   
    </div>
  );
};

export default RowTable;