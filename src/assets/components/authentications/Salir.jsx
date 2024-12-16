import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoaderSalir from './LoaderSalir';

const Salir = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    logout();
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 2000); // Espera 2 segundos antes de navegar
  }, [logout, navigate]);

  if (loading) {
    return <LoaderSalir />;
  }

  return null;
};

export default Salir;