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
  const { login } = useAuth();

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

      if (data.success) {
        setLoading(true); // Muestra el Loader solo si el login es exitoso
        login(); // Actualiza el estado de autenticación
        setTimeout(() => {
          navigate('/');
        }, 1000); // Espera 1 segundo antes de navegar
      } else {
        setError('Usuario o contraseña incorrectos'); // Cambia el mensaje de error aquí
      }
    } catch (error) {
      setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    if (error) {
      const errorElement = document.querySelector(`.${style.error}`);
      if (errorElement) {
        errorElement.classList.add(style.show);
      }
    }
  }, [error]);

  if (loading) {
    return <Loader />;
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;