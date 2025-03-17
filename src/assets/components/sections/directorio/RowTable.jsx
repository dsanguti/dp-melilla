import React, { useState, useEffect } from 'react';
import style from "./Directorio.module.css";
import OrdenField from "./OrdenField";
import PuestoField from "./PuestoField";
import NombreField from "./NombreField";
import ApellidosField from "./ApellidosField";
import TelefonoField from "./TelefonoField";
import ExtensionField from "./ExtensionField";
import CorreoField from "./CorreoField";
  
import Edit from "../../icons/Edit";
import Delete from "../../icons/Delete";
import Modal from '../../Modal';
import FormEditar from './FormEditar';
import FormDelete from './FormDelete';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RowTable = ({ id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina, userProfile, fetchData }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina });

  useEffect(() => {
    setFormData({ id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina });
  }, [id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina]);

  const openEditModal = () => {
    setFormData({ id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = () => {
    setFormData({ id, orden, puesto, nombre, apellidos, telefono, extension, correo, oficina });
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

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
        toast.success('Cambios guardados correctamente', {
          autoClose: 2000,
          position: "bottom-right",
        });
        closeEditModal();
        fetchData(); // Actualizar los datos después de guardar
      } else {
        toast.error('Error al guardar los cambios: ' + result.message, {
          autoClose: 3000,
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error('Error al conectar con el servidor: ' + error.message, {
        autoClose: 3000,
        position: "bottom-right",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost/backend/api/directorio/deleteRegistroDirectorio.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success('Registro eliminado correctamente', {
          autoClose: 2000,
          position: "bottom-right",
        });
        closeDeleteModal();
        fetchData(); // Actualizar los datos después de eliminar
      } else {
        toast.error('Error al eliminar el registro: ' + result.message, {
          autoClose: 3000,
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error('Error al conectar con el servidor: ' + error.message, {
        autoClose: 3000,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className={style.containerFila}>
       {userProfile.directorio === "editar" && (
        <div className={style.orden}>
          <OrdenField orden={orden} />
        </div>
      )}
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
          <Edit className={style.edit} onClick={openEditModal} />
          <Delete className={style.delete} onClick={openDeleteModal} />
        </div>
      )}

      {/* Modal para editar */}
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <FormEditar formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} />
      </Modal>

      {/* Modal para eliminar */}
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <FormDelete formData={formData} handleDelete={handleDelete} handleCancel={closeDeleteModal} />
      </Modal>
    </div>
  );
};

export default RowTable;