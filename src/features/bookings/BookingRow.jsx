import { formatDistanceFromNow } from '../../utils/helpers';
import { format, isToday } from 'date-fns';

function BookingRow({
  data: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalprice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const tag = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'red',
  };

  return (
    <div className="grid grid-cols-[.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] justify-items-start gap-10 rounded-lg border-2 border-gray-200 px-10 py-6 last:border-b-0">
      <div className="text-2xl font-semibold text-gray-600">{cabinName}</div>

      <div className="first-child:font-semibold last-child:text-xl flex flex-col gap-2 text-xl text-gray-500">
        <span>{guestName}</span>
        <span>{email}</span>
      </div>

      <div className="first-child:font-semibold last-child:text-xl flex flex-col gap-2 text-xl text-gray-500">
        <span>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), 'MMM dd yyyy')}&mdash;
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </div>

      <div>
        <span
          className={`w-fit text-${tag[status]}-500 rounded-full border-2 px-3 py-1 text-lg uppercase bg-${tag[status]}-200`}
        >
          {status.replace('-', ' ')}
        </span>
      </div>
      <div className="font-semibold">{totalprice}</div>
      <div></div>
    </div>
  );
}

export default BookingRow;
