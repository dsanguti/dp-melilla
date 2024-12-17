import { useState, useEffect } from "react";
import style from "./Directorio.module.css";

const TablaDirectorio = ({ section }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/backend/api/directorio/${section}.php`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || 'Error fetching data');
        }
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [section]);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Puesto</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Extensión</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.puesto}</td>
            <td>{item.nombre}</td>
            <td>{item.apellidos}</td>
            <td>{item.telefono}</td>
            <td>{item.extension}</td>
            <td>{item.correo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDirectorio;