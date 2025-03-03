import Delete from "../../icons/Delete";
import Edit from "../../icons/Edit";
import style from "./Directorio.module.css";

const EditarField = ({ Editar }) => (
  <div className={style.containerField}>
    <Edit /><Delete />
  </div>
);

export default EditarField;