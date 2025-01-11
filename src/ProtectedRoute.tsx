import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './App.css'

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/DATA/login" />;
};

export default ProtectedRoute;      