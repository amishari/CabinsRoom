import BookingHeader from '../features/bookings/BookingHeader';
import BookingHeaderRow from '../features/bookings/BookingHeaderRow';
import BookingRow from '../features/bookings/BookingRow';
import { useBookings } from '../features/bookings/useBookings';
import Spinner from '../ui/Spinner';

function Bookings() {
  const { isLoading, bookings } = useBookings();

  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="overflow-hidden rounded-lg border-2 border-gray-300 bg-gray-50 px-0 py-5 text-2xl">
        <BookingHeader />
        <BookingHeaderRow />
        {bookings.map((booking) => (
          <BookingRow data={booking} key={booking.id} />
        ))}
      </div>
    </>
  );
}
export default Bookings;
