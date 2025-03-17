import { useState, useEffect } from "react";
import HeaderRowTable from "./HeaderRowTable";
import ListRowTable from "./ListRowTable";
import Search from "./Search";
import style from "./Directorio.module.css";

const TablaDirectorio = ({ section, userProfile, data, fetchData }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const [filteredData, setFilteredData] = useState([]); // Estado para los datos filtrados

  const fetchDataInternal = async () => {
    setLoading(true);
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
      fetchData(result.data); // Actualizar datos en el componente padre
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataInternal();
  }, [section]);

  // Filtrar los datos en base al término de búsqueda
  useEffect(() => {
    if (!data) return;
    const filtered = data.filter(
      (item) =>
        item.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.puesto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.telefono?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.extension?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.correo?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={style.tableContainer}>
      {/* Agregamos el componente de búsqueda */}
      
      
      <Search onSearch={handleSearch} />
      <HeaderRowTable profile={userProfile} />
      <ListRowTable
        data={filteredData} // Usamos los datos filtrados
        error={error}
        loading={loading}
        userProfile={userProfile}
        fetchData={fetchDataInternal}
      />
    </div>
  );
};

export default TablaDirectorio;
