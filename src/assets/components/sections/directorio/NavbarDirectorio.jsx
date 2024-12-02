import { NavLink } from "react-router-dom";
import style from "./Directorio.module.css";

const NavbarDirectorio = ({ setSection }) => {
    return (
      <nav className={style.navbar}>
        <NavLink to="/directorio/dp" className={({ isActive }) => (isActive ? style.isActive : "")} onClick={() => setSection("dp_directorio")}>
          D.P.
        </NavLink>
        <NavLink to="/directorio/oe" className={({ isActive }) => (isActive ? style.isActive : "")} onClick={() => setSection("oe_directorio")}>
          Empleo
        </NavLink>
        <NavLink to="/directorio/coe" className={({ isActive }) => (isActive ? style.isActive : "")} onClick={() => setSection("op_directorio")}>
          Prestaciones
        </NavLink>
        <NavLink to="/directorio/coe" className={({ isActive }) => (isActive ? style.isActive : "")} onClick={() => setSection("coe_directorio")}>
          COE
        </NavLink>
      </nav>
    );
  };
  
  export default NavbarDirectorio;