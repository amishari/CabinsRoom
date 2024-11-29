import Spinner from '../../ui/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '../../ui/ButtonGroup';

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
      </div>
      <BookingDataBox booking={booking} />
      <ButtonGroup>
        <button className="border- rounded-sm bg-indigo-600 px-2 py-2 text-indigo-100 shadow-lg hover:bg-indigo-700">
          Check in booking #{bookingId}
        </button>
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border-2 border-gray-200 bg-white px-2 py-2 text-gray-600 shadow-sm hover:bg-gray-100"
        >
          Back
        </button>
      </ButtonGroup>
    </div>
  );
}

export default CheckinBooking;
