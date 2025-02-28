import style from "./Directorio.module.css";

const PuestoField = ({ puesto }) => (
  <div className={style.containerField}>
    <span>{puesto}</span>
  </div>
);

export default PuestoField;