import style from "./Directorio.module.css";
import RowTable from "./RowTable";

const ListRowTable = ({ data = [], error, loading, userProfile, fetchData }) => {
  if (loading) return <p>Cargando directorio...</p>;
  if (error) return <p>Error al cargar el directorio: {error}</p>;
  if (!Array.isArray(data) || data.length === 0) return <p>No hay registros en el directorio</p>;

  return (
    <div className={style.containerListRow}>
      {data.map((item) => (
        <RowTable
          key={item.id} // Asumiendo que cada item tiene un campo 'id'
          id={item.id}
          orden={item.orden}
          puesto={item.puesto}
          nombre={item.nombre}
          apellidos={item.apellidos}
          telefono={item.telefono}
          extension={item.extension}
          correo={item.correo}
          oficina = {item.oficina}
          userProfile={userProfile}
          fetchData={fetchData}
        />
      ))}
    </div>
  );
};

export default ListRowTable;
