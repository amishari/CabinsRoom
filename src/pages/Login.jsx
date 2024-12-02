import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
export default function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[40rem] content-center justify-center gap-14 bg-gray-50">
      <Logo />
      <h3 className="text-center text-3xl font-semibold leading-6">
        Log in to your account
      </h3>
      <LoginForm />
    </main>
  );
}
