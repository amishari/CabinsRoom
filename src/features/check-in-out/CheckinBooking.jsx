import Spinner from '../../ui/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';
import { useNavigate } from 'react-router-dom';


function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-5xl font-semibold leading-6">
            Check in booking #{bookingId}
          </h1>
        </div>
        <button onClick={()=>navigate(-1)}
         className="rounded-lg border-0 bg-white p-2 text-center text-2xl font-semibold text-indigo-500 transition-all duration-300 hover:bg-indigo-300 active:bg-indigo-700" >
          &larr; Back
        </button>
        {/* <BookingDataBox booking={booking} /> */}
      </div>
    </div>
  );
}

export default CheckinBooking;
