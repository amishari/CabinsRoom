// quite presentational component
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { format, isToday } from 'date-fns';
import DataItem from '../../ui/DataItem';
import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';
export default function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extraPrice,
    totalprice,
    hasBreakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestName,
      email,
      nationality,
      countryFlag,
      nationalID,
    },
    cabins: { name: cabinName },
  } = booking;
  return (
    <section className="flex flex-col gap-10 overflow-hidden rounded-md border-2 border-gray-100 bg-white">
      <header className="flex items-center justify-between bg-indigo-500 px-16 py-8 text-3xl font-semibold text-indigo-100">
        <div className="flex items-center gap-6 text-3xl font-semibold">
          <HiOutlineHomeModern className="h-12 w-12" />
          <p>
            {numNights} nights in Cabin{' '}
            <span className="text-3xl">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </header>
      <section className="pt-3.2 pb-1.2 px-4">
        <div className="mb-[1.6rem] flex items-center gap-[1.2rem] text-gray-500">
          {countryFlag && (
            <img
              className="border-bray-100 block max-w-8 border-2"
              src={countryFlag}
              alt={`Flag of ${nationality}`}
            />
          )}
          <p className="font-semibold text-gray-700">
            {' '}
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>email</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>
        {observations && (
          <DataItem
            icon={
              <HiOutlineChatBubbleBottomCenterText className="h-10 w-10 text-inherit" />
            }
            label="Observations"
          >
            {observations}
          </DataItem>
        )}
        <DataItem
          icon={<HiOutlineCheckCircle className="h-10 w-10 text-inherit" />}
          label="Breakfast included?"
        >
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>
        <div className="mt-10 flex items-center justify-between rounded-sm px-12 py-7">
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalprice)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extraPrice,
              )} breakfast)`}
          </DataItem>
          <p className="text-2xl font-semibold uppercase">
            {isPaid ? 'Paid' : 'Will pay at property'}
          </p>
        </div>
      </section>
      <footer className="px-16 py-6 text-right text-xl text-gray-500">
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </footer>
    </section>
  );
}
