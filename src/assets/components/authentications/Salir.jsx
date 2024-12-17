import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoaderSalir from './LoaderSalir';

const Salir = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        await logout(); // Realiza el logout
      } catch (error) {
        console.error('Logout failed', error);
      } finally {
        setLoading(false); // Cambia el estado a false después del logout
      }
    }, 2000); // Muestra el loader durante 2 segundos antes de hacer el logout

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta antes de tiempo
  }, [logout]);

  useEffect(() => {
    if (!loading) {
      navigate('/login'); // Redirige a login después de que el loading se haya completado
    }
  }, [loading, navigate]);

  if (loading) {
    return <LoaderSalir />; // Muestra el loader mientras se espera
  }

  return null; // No renderiza nada más una vez el estado de loading es false
};

export default Salir;
