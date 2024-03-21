// src/components/auth/LogoutButton.tsx
import { useAuth } from './useAuth';
import { Config } from '@/constants';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>Log Out</button>;
};

export default LogoutButton;