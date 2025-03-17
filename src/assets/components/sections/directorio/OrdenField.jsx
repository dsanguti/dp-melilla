import style from "./Directorio.module.css";

const OrdenField = ({ orden }) => (
  <div className={style.containerField}>
    <span>{orden}</span>
  </div>
);

export default OrdenField;