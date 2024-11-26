import Pagination from '../../ui/Pagination';

export default function BookingFooter({ count }) {
  return (
    <footer className="flex justify-center bg-white p-5 [&:not(:has(*))]:hidden">
      <Pagination count={count} />
    </footer>
  );
}
