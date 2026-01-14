import LoginForm from '@/components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Tracker - Login',
  description: 'Sign in to track your job applications',
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}
