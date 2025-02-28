import { useState } from "react";
import style from "./Directorio.module.css";

const NavbarDirectorio = ({ setSection }) => {
  const [activeButton, setActiveButton] = useState("dp_directorio");

  const handleClick = (section) => {
    setSection(section);
    setActiveButton(section);
  };

  return (
    <nav className={style.navbar}>
      <button
        className={`${style.navButton} ${activeButton === "dp_directorio" ? style.isActive : ""}`}
        onClick={() => handleClick("dp_directorio")}
      >
        D.P.
      </button>
      <button
        className={`${style.navButton} ${activeButton === "oe_directorio" ? style.isActive : ""}`}
        onClick={() => handleClick("oe_directorio")}
      >
        Empleo
      </button>
      <button
        className={`${style.navButton} ${activeButton === "op_directorio" ? style.isActive : ""}`}
        onClick={() => handleClick("op_directorio")}
      >
        Prestaciones
      </button>
      <button
        className={`${style.navButton} ${activeButton === "coe_directorio" ? style.isActive : ""}`}
        onClick={() => handleClick("coe_directorio")}
      >
        COE
      </button>
    </nav>
  );
};

export default NavbarDirectorio; 