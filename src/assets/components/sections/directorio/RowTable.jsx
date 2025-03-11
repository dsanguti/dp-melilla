import React, { useState, useEffect } from 'react';
import style from "./Directorio.module.css";
import PuestoField from "./PuestoField";
import NombreField from "./NombreField";
import ApellidosField from "./ApellidosField";
import TelefonoField from "./TelefonoField";
import ExtensionField from "./ExtensionField";
import CorreoField from "./CorreoField";    
import Edit from "../../icons/Edit";
import Delete from "../../icons/Delete";
import Modal from '../../Modal'; // Importamos el modal
import FormEditar from './FormEditar';

const RowTable = ({ id, puesto, nombre, apellidos, telefono, extension, correo, userProfile, fetchData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto
  const [formData, setFormData] = useState({ id, puesto, nombre, apellidos, telefono, extension, correo }); // Estado para los datos del formulario

  useEffect(() => {
    setFormData({ id, puesto, nombre, apellidos, telefono, extension, correo });
  }, [id, puesto, nombre, apellidos, telefono, extension, correo]);

  const openModal = () => {
    setFormData({ id, puesto, nombre, apellidos, telefono, extension, correo }); // Actualizar los datos del formulario
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost/backend/api/directorio/guardarCambiosDirectorio.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Cambios guardados exitosamente');
        closeModal();
        fetchData(); // Actualizar los datos después de guardar
      } else {
        alert('Error al guardar los cambios: ' + result.message);
      }
    } catch (error) {
      alert('Error al conectar con el servidor: ' + error.message);
    }
  };

  return (
    <div className={style.containerFila}>
      <div className={style.puesto}>
        <PuestoField puesto={puesto} />
      </div>
      <div className={style.nombre}>
        <NombreField nombre={nombre} />
      </div>
      <div className={style.apellidos}>
        <ApellidosField apellidos={apellidos} />
      </div>
      <div className={style.telefono}>
        <TelefonoField telefono={telefono} />
      </div>
      <div className={style.extension}>
        <ExtensionField extension={extension} />
      </div>
      <div className={style.correo}>
        <CorreoField correo={correo} />
      </div>
      {userProfile.directorio === "editar" && (
        <div className={style.editar}>
          <Edit className={style.edit} onClick={openModal} />
          <Delete className={style.delete} />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormEditar formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} />
      </Modal>
    </div>
  );
};

export default RowTable;