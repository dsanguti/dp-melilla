import { useState, useEffect } from "react";
import HeaderRowTable from "./HeaderRowTable";
import ListRowTable from "./ListRowTable";
import style from "./Directorio.module.css";

const TablaDirectorio = ({ section }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Ahora 'loading' está definido

  const fetchData = async () => {
    setLoading(true); // ✅ Indicamos que está cargando antes de la petición
    setError(null);
    try {
      const response = await fetch(`http://localhost/backend/api/directorio/${section}.php`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      console.log("Response text:", text);
      if (!text) {
        throw new Error("Empty response");
      }
      let result;
      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        throw new Error("Invalid JSON response");
      }
      if (!result.success) {
        throw new Error(result.message || "Error fetching data");
      }
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false); // ✅ Finalizamos la carga al terminar
    }
  };

  useEffect(() => {
    fetchData();
  }, [section]);

  return (
    <div className={style.tableContainer}>
      <HeaderRowTable />
      <ListRowTable data={data} error={error} loading={loading} />
    </div>
  );
};

export default TablaDirectorio;