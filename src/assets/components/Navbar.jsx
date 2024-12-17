import { NavLink } from "react-router-dom";
import { useAuth } from './authentications/AuthContext';
import style from "./Navbar.module.css";

const Navbar = () => {
  const { userProfile } = useAuth();

  const hasAccess = (profile) => {
    return profile && profile !== 'sin acceso';
  };

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
            to="/directorio"
            className={({ isActive }) => (isActive ? style.isActive : "")}
          >
            Directorio
          </NavLink>
        </li>
        <li className={style.dropdown}>
          <span>D.P.</span>
          <ul className={style.dropdownContent}>
            {userProfile && hasAccess(userProfile.personal) && (
              <li>
                <NavLink
                  to="/personal"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Personal
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.observatorio) && (
              <li>
                <NavLink
                  to="/observatorio"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Observatorio
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.ratel) && (
              <li>
                <NavLink
                  to="/ratel"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Ratel
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.becas) && (
              <li>
                <NavLink
                  to="/becas"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Becas
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.uci) && (
              <li>
                <NavLink
                  to="/uci"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  UCI
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.sanciones) && (
              <li>
                <NavLink
                  to="/sanciones"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Sanciones
                </NavLink>
              </li>
            )}
          </ul>
        </li>
        <li className={style.dropdown}>
          <span>Oficina</span>
          <ul className={style.dropdownContent}>
            {userProfile && hasAccess(userProfile.empleo) && (
              <li>
                <NavLink
                  to="/empleo"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Empleo
                </NavLink>
              </li>
            )}
            {userProfile && hasAccess(userProfile.prestaciones) && (
              <li>
                <NavLink
                  to="/prestaciones"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Prestaciones
                </NavLink>
              </li>
            )}
          </ul>
        </li>
        <li className={`${style.dropdown} ${style.user}`}>
          <span>User</span>
          <ul className={style.dropdownContent}>
            {userProfile && userProfile.admin === 'admin' && (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) => (isActive ? style.isActive : "")}
                >
                  Admin
                </NavLink>
              </li>
            )}
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