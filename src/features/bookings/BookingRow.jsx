function BookingRow({ data }) {
  const {
    id,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuest,
    totalPrice,
    status,
    // guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = data;
  return (
    <div className="grid grid-cols-[.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] justify-items-start gap-10 rounded-lg border-2 border-gray-200 px-10 py-6 last:border-b-0">
      <div className="text-2xl font-semibold text-gray-600">{cabinName}</div>
      <div className="text-2xl font-semibold">{guestName}</div>
      <div className="text-2xl font-semibold">
        {startDate}-{endDate} : {numNights}
      </div>
      <div className="text-2xl font-semibold text-green-800">{status}</div>
      <div>{totalPrice}</div>
      <div></div>
    </div>
  );
}

export default BookingRow;
