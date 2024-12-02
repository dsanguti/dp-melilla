
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";





const Navbar = () => {
 
  return (
    <nav className={style.navbar}>
      
      <ul className={style.ul}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
           Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/empleo"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Empleo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prestaciones"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Prestaciones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personal"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Personal
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/observatorio"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Observatorio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ratel"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Ratel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/directorio"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Directorio
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
