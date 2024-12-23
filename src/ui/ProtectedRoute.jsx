import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';
import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  console.log(isAuthenticated);

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
