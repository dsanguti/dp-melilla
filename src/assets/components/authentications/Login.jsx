import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Loader from '../Loader';
import style from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated, loading: authLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost/backend/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setLoading(true);
        login(data.profiles);
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate('/'); // Realiza la navegación después de la autenticación
      }, 1000); // Espera 1 segundo para mostrar el loader
    }
  }, [isAuthenticated, navigate]);

  if (authLoading || loading) {
    return <Loader />; // Muestra el Loader mientras se está procesando la autenticación
  }

  if (isAuthenticated) {
    return null; // Si ya está autenticado, no renderiza el formulario de login
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.errorContainer}>
            {error && <p className={`${style.error} ${error ? style.show : ''}`}>{error}</p>}
          </div>
          <button className={style.button} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
