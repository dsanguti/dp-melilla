import React from 'react';
import style from './FormDelete.module.css';

const FormDelete = ({ formData, handleDelete, handleCancel }) => {
  return (
    <div className={style.form}>
      <div className={style.row}>
        <h2 className={style.formTitle}>Eliminar Persona de Directorio</h2>
      </div>
      
      <div className={style.messageContainer}>
        <p className={style.warningMessage}>
          ¿Está seguro que desea eliminar esta entrada del directorio?
        </p>
        
        <div className={style.userInfo}>
          <p><strong>Puesto:</strong> {formData.puesto}</p>
          <p><strong>Nombre:</strong> {formData.nombre} {formData.apellidos}</p>
        </div>
        
        <p className={style.warningText}>
          Esta acción no se puede deshacer.
        </p>
      </div>
      
      <div className={style.buttonContainer}>
        <button 
          type="button" 
          className={style.cancelButton} 
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button 
          type="button" 
          className={style.deleteButton} 
          onClick={() => handleDelete(formData.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default FormDelete;