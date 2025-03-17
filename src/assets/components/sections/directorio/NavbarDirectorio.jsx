import { useState } from "react";
import style from "./Directorio.module.css";
import Modal from "../../Modal";
import FormAgregarUserDirectorio from "./FormAgregarUserDirectorio";
import { toast } from 'react-toastify';
import AddUser from "../../icons/AddUser";
import 'react-toastify/dist/ReactToastify.css';

const NavbarDirectorio = ({ setSection, userProfile }) => {
  const [activeButton, setActiveButton] = useState("dp_directorio");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]); // Estado para los usuarios

  const handleClick = (section) => {
    setSection(section);
    setActiveButton(section);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/backend/api/directorio/getUsuarios.php');
      const data = await response.json();
      setUsuarios(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      toast.error('Error al obtener datos: ' + error.message, {
        autoClose: 3000,
        position: "bottom-right",
      });
    }
  };

  const handleSaveNewUser = async (userData) => {
    try {
      const response = await fetch('http://localhost/backend/api/directorio/agregarUsuarioDirectorio.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Usuario agregado correctamente', {
          autoClose: 2000,
          position: "bottom-right",
        });
        closeModal();
        fetchData(); // Actualiza los datos después de agregar
      } else {
        toast.error('Error al agregar usuario: ' + result.message, {
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
    <>
      <nav className={style.navbar}>
        <button
          className={`${style.navButton} ${activeButton === "dp_directorio" ? style.isActive : ""}`}
          onClick={() => handleClick("dp_directorio")}
        >
          D.P.
        </button>
        <button
          className={`${style.navButton} ${activeButton === "oe_directorio" ? style.isActive : ""}`}
          onClick={() => handleClick("oe_directorio")}
        >
          Empleo
        </button>
        <button
          className={`${style.navButton} ${activeButton === "op_directorio" ? style.isActive : ""}`}
          onClick={() => handleClick("op_directorio")}
        >
          Prestaciones
        </button>
        <button
          className={`${style.navButton} ${activeButton === "coe_directorio" ? style.isActive : ""}`}
          onClick={() => handleClick("coe_directorio")}
        >
          COE
        </button>
      </nav>

      <div>
        {userProfile.directorio === "editar" && (
          <div className={style.AddUserIconContainer}>
            <AddUser className={style.AddUserIcon} onClick={openModal}></AddUser>
          </div>
        )}

        {/* Modal para agregar usuario */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FormAgregarUserDirectorio handleSave={handleSaveNewUser} />
        </Modal>
      </div>
    </>
  );
};

export default NavbarDirectorio;
