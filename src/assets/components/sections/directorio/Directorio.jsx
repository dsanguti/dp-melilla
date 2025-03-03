import { useState, useEffect } from "react";
import NavbarDirectorio from "./NavbarDirectorio";
import TablaDirectorio from "./TablaDirectorio";
import style from "./Directorio.module.css";
import { useAuth } from "../../authentications/AuthContext";

const Directorio = () => {
  const [section, setSection] = useState(() => {
    return localStorage.getItem('currentSection') || 'dp_directorio';
  });

  const { userProfile } = useAuth(); // Obtener el perfil del usuario desde el contexto de autenticación

  useEffect(() => {
    localStorage.setItem('currentSection', section);
  }, [section]);

  console.log("User Profile:", userProfile); // Verifica el perfil del usuario

  return (
    <div className={style.containerDirectorio}>
      <NavbarDirectorio className={style.containerNavbarDirectorio} setSection={setSection} />
      <TablaDirectorio className={style.containerTablaDirectorio} section={section} userProfile={userProfile} />
    </div>
  );
};

export default Directorio;