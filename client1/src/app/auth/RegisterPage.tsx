// src/components/auth/RegisterPage.tsx
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './useAuth';
import { Config } from '@/constants';

const RegisterPage = () => {
  const router = useRouter();
  const { setAuthenticationState } = useAuth();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    try {
      const app = initializeApp(Config.firebaseConfig);
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Handle successful registration
      setAuthenticationState(true);
      router.push('/dashboard'); // Redirect to dashboard after successful registration
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.message);
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;