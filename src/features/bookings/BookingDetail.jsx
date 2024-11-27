import { useNavigate } from 'react-router-dom';
import { useBooking } from './useBooking';
import ButtonGroup from '../../ui/ButtonGroup';
import { HiArrowUpOnSquare } from 'react-icons/hi2';

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const tag = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-5xl font-semibold leading-6">
            Booking #{bookingId}
          </h1>
          <span
            style={{ backgroundColor: `${tag[status]}` }}
            className={`w-fit rounded-full border-2 px-3 py-1 text-lg uppercase`}
          >
            {status.replace('-', ' ')}
          </span>
        </div>

        <button className="rounded-sm border-0 bg-none text-center font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-700 active:bg-indigo-700">
          &larr; Back
        </button>
      </div>
      <BookingDataBox />
      <ButtonGroup>
        <button className="rounded-sm border-0 shadow-sm">Check-in</button>
        <button className="rounded-sm border-0 shadow-sm">
          <HiArrowUpOnSquare /> checkout
        </button>
        <button className="rounded-sm border-0 bg-red-700 text-red-100 shadow-sm hover:bg-red-800">
          Delete booking
        </button>
        <button className="rounded-sm border-2 border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-100">
          Back
        </button>
      </ButtonGroup>
    </div>
  );
}

export default BookingDetail;
