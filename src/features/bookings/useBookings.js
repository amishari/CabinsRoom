import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBooking';

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBookings(),
    retry: false,
  });
  return { isLoading, bookings, error };
}
