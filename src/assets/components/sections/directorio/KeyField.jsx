import style from "./Directorio.module.css";

const KeyField = ({ key }) => (
  <div className={style.containerFieldKey}>
    <span>{key}</span>
  </div>
);

export default KeyField;