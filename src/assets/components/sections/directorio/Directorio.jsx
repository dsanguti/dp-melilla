import { useState, useEffect } from "react";
import NavbarDirectorio from "./NavbarDirectorio";
import TablaDirectorio from "./TablaDirectorio";
import style from "./Directorio.module.css";
import { useAuth } from "../../authentications/AuthContext";

const Directorio = () => {
  const [section, setSection] = useState(() => {
    return localStorage.getItem('currentSection') || 'dp_directorio';
  });
  const [data, setData] = useState([]);
  const { userProfile } = useAuth(); // Obtener el perfil del usuario desde el contexto de autenticación

  useEffect(() => {
    localStorage.setItem('currentSection', section);
  }, [section]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost/backend/api/directorio/${section}.php`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Error fetching data");
      }
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [section]);

  return (
    <div className={style.containerDirectorio}>
      <NavbarDirectorio className={style.containerNavbarDirectorio} setSection={setSection} userProfile={userProfile} />
      <TablaDirectorio className={style.containerTablaDirectorio} section={section} userProfile={userProfile} data={data} fetchData={fetchData} />
    </div>
  );
};

export default Directorio;