import { formatDistanceFromNow } from '../../utils/helpers';
import { format, isToday } from 'date-fns';
import Menus from '../../ui/Menus';
import { HiEye } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const tag = {
    unconfirmed: '#bfdbfe',
    'checked-in': '#bbf7d0',
    'checked-out': '#fecaca',
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
          style={{ backgroundColor: `${tag[status]}` }} //in tailwind this is the way dynamically
          className={`w-fit rounded-full border-2 px-3 py-1 text-lg uppercase`}
        >
          {status.replace('-', ' ')}
        </span>
      </div>
      <div className="font-semibold">{totalprice}</div>
      <div>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye className="h-6 w-6" />}
              onClick={() => console.log('123')}
            >
              See Details
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </div>
  );
}

export default BookingRow;
