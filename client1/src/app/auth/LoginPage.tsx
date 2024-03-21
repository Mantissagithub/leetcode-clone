// src/components/auth/LoginPage.tsx
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './useAuth';
import { Config } from '@/constants';

const LoginPage = () => {
  const router = useRouter();
  const { setAuthenticationState } = useAuth();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const app = initializeApp(Config.firebaseConfig);
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(auth, target.email.value, target.password.value);
      
      // Handle successful login
      setAuthenticationState(true);
      router.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;