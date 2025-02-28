import style from "./Directorio.module.css";

const TelefonoField = ({ telefono }) => (
  <div className={style.containerField}>
    <span>{telefono}</span>
  </div>
);

export default TelefonoField;