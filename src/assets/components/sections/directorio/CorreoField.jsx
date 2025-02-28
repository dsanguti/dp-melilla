import style from "./Directorio.module.css";

const CorreoField = ({ correo }) => (
  <div className={style.containerField}>
    <span>{correo}</span>
  </div>
);

export default CorreoField;