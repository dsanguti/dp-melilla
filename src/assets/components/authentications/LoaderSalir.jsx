import style from "./LoaderSalir.module.css";
const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;