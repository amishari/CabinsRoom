import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ApplyLayout from './ui/ApplyLayout';
import Error from './Error';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Login from './pages/Login';

import './index.css';

const router = createBrowserRouter([
  {
    element: <ApplyLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Dashboard />,
        path: '/',
      },
      {
        element: <Bookings />,
        path: '/bookings',
      },
      {
        element: <Cabins />,
        path: '/cabins',
      },
      {
        element: <Settings />,
        path: '/settings',
      },
      {
        element: <Users />,
        path: '/users',
      },
    ],
  },
  {
    element: <Login />,
    path: '/login',
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </>
  );
}
