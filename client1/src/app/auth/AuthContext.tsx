// src/context/AuthContext.tsx
import React, { createContext, useState } from 'react';
import Cookies from 'universal-cookie';

interface AuthValue {
  isAuthenticated: boolean;
  setAuthenticationState: (state: boolean) => void;
  login: () => Promise<void>;
  register: () => Promise<void>;
  logout: () => void;
}

const cookies = new Cookies();

export const AuthContext = createContext<AuthValue>({
  isAuthenticated: false,
  setAuthenticationState: () => {},
  login: async () => {},
  register: async () => {},
  logout: () => {}
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setAuthenticationState] = useState(cookies.get('authentication') ? true : false);

  const login = async () => {};

  const register = async () => {};

  const logout = () => {
    cookies.remove('authentication');
    setAuthenticationState(false);
  };

  const authValue = {
    isAuthenticated,
    setAuthenticationState,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};