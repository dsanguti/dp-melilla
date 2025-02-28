import style from "./Directorio.module.css";

const ExtensionField = ({ extension }) => (
  <div className={style.containerField}>
    <span>{extension}</span>
  </div>
);

export default ExtensionField;