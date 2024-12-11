
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import User from "./icons/User";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.ul}>
        <li>
        
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >Inicio
          </NavLink>
        </li>
        <li className={style.dropdown}>
          <span>D.P.</span>
          <ul className={style.dropdownContent}>
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
                to="/becas"
                className={({ isActive }) => (isActive ? style.isActive : "")}
              >
                Becas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uci"
                className={({ isActive }) => (isActive ? style.isActive : "")}
              >
                UCI
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={style.dropdown}>
          <span>Oficina</span>
          <ul className={style.dropdownContent}>
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
          </ul>
        </li>
        <li>
          <NavLink
            to="/directorio"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Directorio
          </NavLink>
        </li>
        <li className={`${style.dropdown} ${style.user}`}>
          <span>User</span>
          <ul className={style.dropdownContent}>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? style.isActive : "")}
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/salir"
                className={({ isActive }) => (isActive ? style.isActive : "")}
              >
                Salir
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;