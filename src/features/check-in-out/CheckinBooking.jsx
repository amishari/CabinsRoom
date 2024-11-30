import { useEffect, useState } from 'react';
import { useBooking } from '../bookings/useBooking';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import ButtonGroup from '../../ui/ButtonGroup';
import CheckBox from '../../ui/CheckBox';
import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './useCheckin';
import { useSetting } from '../setting/useSetting';

function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const { isLoading: isLoadingSetting, settings } = useSetting();
  const [confirmedPaid, setConfirmedPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  useEffect(() => setConfirmedPaid(booking?.isPaid ?? false), [booking]); // when comp mount can't access to isPaid,so useEffect is applied
  const navigate = useNavigate();
  const { checkin, isCheckingIn } = useCheckin();
  if (isLoading || isLoadingSetting) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalprice,
    numGuest,
    hasBreakfast,
    numNights,
  } = booking;
  const optionalBreakfastPrice = settings.breakfastPrice * numGuest * numNights;
  function handleCheckin() {
    if (!confirmedPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: optionalBreakfastPrice,
          totalprice: totalprice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <h1 className="text-5xl font-semibold leading-6">
            Check in booking #{bookingId}
          </h1>
        </div>
      </div>
      <BookingDataBox booking={booking} />
      <div className="bg-silver-100 flex flex-col gap-6 rounded-md border-2 border-gray-100 px-10 py-5 shadow-md">
        {!hasBreakfast && (
          <CheckBox
            checked={addBreakfast}
            id="breakfast"
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmedPaid(false);
            }}
            disabled={addBreakfast || isCheckingIn}
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
          </CheckBox>
        )}
        <CheckBox
          checked={confirmedPaid}
          id="confirm"
          onChange={() => setConfirmedPaid((confirm) => !confirm)}
          disabled={confirmedPaid || isCheckingIn}
        >
          I confirm {guests.fullName} has paid total amount of
          {!addBreakfast
            ? formatCurrency(totalprice)
            : `${formatCurrency(totalprice + optionalBreakfastPrice)} 
            (${formatCurrency(totalprice)} + ${formatCurrency(optionalBreakfastPrice)})`}
        </CheckBox>
      </div>

      <ButtonGroup>
        <button
          disabled={!confirmedPaid || isCheckingIn}
          onClick={handleCheckin}
          className="border- rounded-sm bg-indigo-600 px-2 py-2 text-indigo-100 shadow-lg hover:bg-indigo-700"
        >
          Check in booking #{bookingId}
        </button>

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

export default CheckinBooking;
