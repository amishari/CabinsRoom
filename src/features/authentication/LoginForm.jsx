import { useState } from 'react';
import { useLogin } from './useLogin';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertival';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return; // Simple validation
    login({ email, password });
  }
  console.log(isPending);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isPending} type="submit">
            {!isPending ? 'Log in' : <SpinnerMini />}
          </Button>
        </FormRowVertical>
      </form>
    </div>
  );
}
