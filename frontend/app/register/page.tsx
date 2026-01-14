import RegisterForm from '@/components/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Tracker - Register',
  description: 'Create an account to track your job applications',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-indigo-900">Job Tracker</h1>
          <p className="mt-2 text-sm text-gray-600">Start your journey today.</p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
