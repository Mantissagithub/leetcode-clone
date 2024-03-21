// src/hooks/useAuth.ts
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const { isAuthenticated, setAuthenticationState, login, register, logout } = useContext(AuthContext);
  return { isAuthenticated, setAuthenticationState, login, register, logout };
};