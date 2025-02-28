import style from "./Directorio.module.css";

const ApellidosField = ({ apellidos }) => (
  <div className={style.containerField}>
    <span>{apellidos}</span>
  </div>
);

export default ApellidosField;