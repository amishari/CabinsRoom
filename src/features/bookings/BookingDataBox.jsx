import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import DeleteItem from '../../ui/DeleteItem';
export default function BookingDataBox() {
  return (
    <section className="overflow-hidden rounded-md border-2 border-gray-100 bg-white">
      <header className="flex items-center justify-between bg-indigo-500 px-16 py-8 text-3xl font-semibold text-indigo-100">
        <div className="flex items-center gap-[1.6rem] text-[1.8rem] font-semibold">
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
          <img
            className="border-bray-100 block max-w-8 border-2"
            src=""
            alt=""
          />
          <p className="font-semibold text-gray-700">guestName</p>
          <span>&bull;</span>
          <p>email</p>
          <span>&bull;</span>
          <p>National ID nationalID</p>
        </div>
        <DeleteItem
          icon={
            <HiOutlineChatBubbleBottomCenterText className="h-10 w-10 text-inherit" />
          }
          label="Observations"
        >
          Observation
        </DeleteItem>
        <DeleteItem
          icon={<HiOutlineCheckCircle className="h-10 w-10 text-inherit" />}
          label="Breakfast included?"
        >
          hasBreakfast ? "Yes" : "No"
        </DeleteItem>
        <div className="mt-[2.4rem] flex items-center justify-between rounded-sm px-[3.2rem] py-[1.6rem]">
          <DeleteItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            Total price + breakfast
          </DeleteItem>
          <p className="text-[1.4rem] font-semibold uppercase">
            isPaid ? "Paid" : "Will pay at property"
          </p>
        </div>
      </section>
      <footer className="px-16 py-6 text-right text-xl text-gray-500">
        <p>Booked format(new Date(created_at), "EEE, MMM dd yyyy, p")</p>
      </footer>
    </section>
  );
}
