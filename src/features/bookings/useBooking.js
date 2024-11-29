import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBooking';

export function useBooking() {
  const { bookingId } = useParams(); // read id from url

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // as default Reacr Query fetch data 3 times in case og fails, by this no retrying
  });

  return { isLoading, error, booking };
}
