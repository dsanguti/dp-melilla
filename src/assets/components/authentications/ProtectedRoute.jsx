import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ requiredAccess }) => {
  const { userProfile } = useAuth();

  const hasAccess = (profile, requiredAccess) => {
    return profile && profile[requiredAccess] && profile[requiredAccess] !== 'sin acceso';
  };

  if (!userProfile || !hasAccess(userProfile, requiredAccess)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;