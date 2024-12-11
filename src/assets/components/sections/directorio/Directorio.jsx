import { useState } from "react";
import NavbarDirectorio from "./NavbarDirectorio";
import TablaDirectorio from "./TablaDirectorio";
import style from "./Directorio.module.css";

const Directorio = () => {
  const [section, setSection] = useState("dp_directorio");

  return (
    <>
    <div className={style.containerDirectorio}>
    <NavbarDirectorio className={style.containerNavbarDirectorio} setSection={setSection} />
    <TablaDirectorio className={style.containerTablaDirectorio} section={section} />
    </div>
     
    </>
  );
};

export default Directorio;