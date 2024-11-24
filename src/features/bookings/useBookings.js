import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBooking';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();
  //filter
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['booking', filter],
    queryFn: () => getBookings({ filter }),
    retry: false,
  });
  return { isLoading, bookings, error };
}
