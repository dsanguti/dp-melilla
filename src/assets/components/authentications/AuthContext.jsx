import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recuperar el estado de autenticación desde localStorage
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const storedProfile = localStorage.getItem('userProfile');

    setIsAuthenticated(authStatus);

    if (authStatus && storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    } else {
      setUserProfile({
        directorio: 'consulta',
        becas: 'sin acceso',
        ratel: 'sin acceso',
        observatorio: 'sin acceso',
        uci: 'sin acceso',
        personal: 'sin acceso',
        sanciones: 'sin acceso',
        empleo: 'sin acceso',
        prestaciones: 'sin acceso',
        admin: 'sin acceso',
      });
    }

    setLoading(false); // Se ejecuta solo una vez al montar el componente
  }, []); // Esto solo se ejecuta cuando el componente se monta

  const login = (profiles) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    setUserProfile(profiles);
    localStorage.setItem('userProfile', JSON.stringify(profiles));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
    const defaultProfile = {
      directorio: 'consulta',
      becas: 'sin acceso',
      ratel: 'sin acceso',
      observatorio: 'sin acceso',
      uci: 'sin acceso',
      personal: 'sin acceso',
      sanciones: 'sin acceso',
      empleo: 'sin acceso',
      prestaciones: 'sin acceso',
      admin: 'sin acceso',
    };
    setUserProfile(defaultProfile);
    localStorage.setItem('userProfile', JSON.stringify(defaultProfile));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userProfile, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
