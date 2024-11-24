import BookingTableOperations from './BookingTableOperations';

function BookingHeader() {
  return (
    <div className="flex items-center justify-between border-gray-300 p-8">
      <h1 className="text-4xl">All Booking</h1>
      <BookingTableOperations />
    </div>
  );
}

export default BookingHeader;
