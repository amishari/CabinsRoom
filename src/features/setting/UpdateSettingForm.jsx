import React from 'react';
import FormRow from '../../../src/ui/FormRow';
import { useUpdateSetting } from './useUpdateSetting';
import { useSetting } from './useSetting';
import Spinner from '../../../src/ui/Spinner';

export default function UpdateSettingForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();
  const { isUpdating, updateSetting } = useUpdateSetting();
  if (isLoading) return <Spinner />;
  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <div>
      <form className="rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10">
        <FormRow label="Minimum nights/booking">
          <input
            type="number"
            id="min-nights"
            defaultValue={minBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, 'minBookingLength')}
          />
        </FormRow>
        <FormRow label="Maximum nights/booking">
          <input
            type="number"
            id="m-nights"
            defaultValue={maxBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
          />
        </FormRow>
        <FormRow label="Maximum guests/booking">
          <input
            type="number"
            id="max-guests"
            defaultValue={maxGuestsPerBooking}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
          />
        </FormRow>
        <FormRow label="Breakfast price">
          <input
            type="number"
            id="breakfast-price"
            defaultValue={breakfastPrice}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
          />
        </FormRow>
      </form>
    </div>
  );
}
