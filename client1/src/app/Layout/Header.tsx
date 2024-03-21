// src/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../auth/useAuth';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const renderAuthControls = () => {
    if (!isAuthenticated) {
      return (
        <li className="inline-block text-blue-600 hover:text-white hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-700 duration-200 transition ease-in-out transform rounded-lg p-2 mr-2">
          <Link href="/login" passHref legacyBehavior>
            <a>Login</a>
          </Link>
        </li>
      );
    }
    return (
      <li className="inline-block text-red-600 hover:text-white hover:bg-red-600 active:bg-red-700 focus:bg-red-700 duration-200 transition ease-in-out transform rounded-lg p-2 mr-2">
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      </li>
    );
  };

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between pl-8 pr-8">
      <div className="font-bold text-2xl">LeetCode Clone</div>
      <ul className="flex space-x-8">
        <li className="inline-block text-green-600 hover:text-white hover:bg-green-600 active:bg-green-700 focus:bg-green-700 duration-200 transition ease-in-out transform rounded-lg p-2 mr-2">
          <Link href="/" passHref legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        {renderAuthControls()}
      </ul>
    </nav>
  );
};

export default Header;