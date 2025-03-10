import style from "./Directorio.module.css";
import PuestoField from "./PuestoField";
import NombreField from "./NombreField";
import ApellidosField from "./ApellidosField";
import TelefonoField from "./TelefonoField";
import ExtensionField from "./ExtensionField";
import CorreoField from "./CorreoField";    
import Edit from "../../icons/Edit";
import Delete from "../../icons/Delete";

const RowTable = ({ puesto, nombre, apellidos, telefono, extension, correo, userProfile }) => {
  return (
    <div className={style.containerFila}>
      <div className={style.puesto}>
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
      {userProfile.directorio === "editar" && (
        <div className={style.editar}>
          <Edit className={style.edit} />
          <Delete />
        </div>)}
   
    </div>
  );
};

export default RowTable;