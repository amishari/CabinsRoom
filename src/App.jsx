import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ApplyLayout from './ui/ApplyLayout';
import Error from './Error';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Booking from './pages/Booking';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

import './index.css';
import { Toaster } from 'react-hot-toast';
import Checkin from './pages/Checkin';

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
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        element: <Bookings />,
        path: '/bookings',
      },
      {
        element: <Booking />,
        path: 'bookings/:bookingId',
      },
      {
        path: 'checkin/:bookingId',
        element: <Checkin />,
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
  {
    element: <PageNotFound />,
    path: '*',
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />;
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: 'blue',
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
