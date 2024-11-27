function BookingHeaderRow() {
  return (
    <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] gap-10 rounded-lg border-2 border-gray-200 bg-gray-100 px-10 py-6">
      <div>Cabin</div>
      <div>Guest</div>
      <div>Date</div>
      <div>Status</div>
      <div>Amount</div>
      <div></div>
    </div>
  );
}

export default BookingHeaderRow;
