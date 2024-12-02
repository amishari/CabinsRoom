import { useNavigate } from 'react-router-dom';
import { useBooking } from './useBooking';
import ButtonGroup from '../../ui/ButtonGroup';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from 'react-icons/hi2';
import Spinner from '../../ui/Spinner';
import BookingDataBox from './BookingDataBox';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteBooking } from './useDeleteBooking';
function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const tag = {
    unconfirmed: '#bfdbfe',
    'checked-in': '#bbf7d0',
    'checked-out': '#fecaca',
  };
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
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

        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border-0 bg-white p-2 text-center text-2xl font-semibold text-indigo-500 transition-all duration-300 hover:bg-indigo-300 active:bg-indigo-700"
        >
          &larr; Back
        </button>
      </div>
      <BookingDataBox booking={booking} />
      <ButtonGroup>
        {status === 'unconfirmed' && (
          <button className="flex items-center justify-between gap-4 rounded-lg border-2 px-2 py-2 shadow-lg hover:bg-green-100">
            <HiArrowDownOnSquare className="h-7 w-7 text-2xl text-green-300" />
            Check-in
          </button>
        )}
        {status === 'checked-in' && (
          <button className="flex items-center justify-between gap-4 rounded-lg border-2 px-2 py-2 shadow-lg hover:bg-red-100">
            <HiArrowUpOnSquare className="h-7 w-7 text-2xl text-red-300" />{' '}
            Check-out
          </button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <button className="flex items-center justify-between gap-4 rounded-lg border-2 px-2 py-2 shadow-lg hover:bg-red-100">
              <HiTrash className="h-7 w-7 text-2xl text-red-300" />
              Delete
            </button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>

          {/* <button className="flex items-center justify-between gap-4 rounded-lg border-2 bg-red-400 px-2 py-2 text-white shadow-lg hover:bg-red-600">
            <HiTrash className="h-7 w-7" />
            Delete
          </button> */}
        </Modal>

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

export default BookingDetail;
