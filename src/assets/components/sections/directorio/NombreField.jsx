import style from "./Directorio.module.css";

const NombreField = ({ nombre }) => (
  <div className={style.containerField}>
    <span>{nombre}</span>
  </div>
);

export default NombreField;