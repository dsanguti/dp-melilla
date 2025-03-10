import React, { useState } from 'react';
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

const RowTable = ({ puesto, nombre, apellidos, telefono, extension, correo, userProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto
  const [formData, setFormData] = useState({ puesto, nombre, apellidos, telefono, extension, correo }); // Estado para los datos del formulario

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
       <FormEditar formData={formData} handleInputChange={handleInputChange}  />
      </Modal>
    </div>
  );
};

export default RowTable;
