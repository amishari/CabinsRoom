import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';
function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;
  const classInput =
    'rounded-sm border-2 border-gray-300 bg-gray-50 px-5 py-3 shadow-md';
  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }
  function onError(errors) {}
  return (
    <div>
      <form
        className={
          onCloseModal
            ? 'w-[80rem] overflow-y-hidden text-2xl'
            : `rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10`
        }
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormRow label="Cabin name" errors={errors?.name?.message}>
          <input
            className={classInput}
            type="text"
            id="name"
            disabled={isWorking}
            {...register('name', {
              required: 'باید پر شود',
              pattern: {
                value: /^\d+$/,
                message: 'Only number please.',
              },
            })}
          />
        </FormRow>
        <FormRow label="Maximum Capacity" errors={errors?.maxCapacity?.message}>
          <input
            className={classInput}
            type="text"
            id="maxCapacity"
            disabled={isWorking}
            {...register('maxCapacity', {
              required: 'باید پر شود',
              min: { value: 1, message: 'Capacity should be at least 1' },
            })}
          />
        </FormRow>

        <FormRow label={'Regular Price'} errors={errors?.regularPrice?.message}>
          <input
            className={classInput}
            type="number"
            id="regularPrice"
            disabled={isWorking}
            {...register('regularPrice', {
              required: 'باید پر شود',
              min: { value: 1, message: 'Capacity should be at least 1' },
            })}
          />
        </FormRow>
        <FormRow label={'Discount amount'} errors={errors?.discount?.message}>
          <input
            className={classInput}
            type="number"
            id="discount"
            defaultValue={0}
            disabled={isWorking}
            {...register('discount', {
              required: 'باید پر شود',
              validate: (value) =>
                value <= getValues().regularPrice ||
                'Discount should be less than regular Price',
            })}
          />
        </FormRow>

        <FormRow
          label={'Description for website'}
          errors={errors?.description?.message}
        >
          <textarea
            className="bg-gray-0 h-32 w-full rounded-md border-2 border-gray-300 px-5 py-3 shadow-sm"
            type="text"
            id="description"
            defaultValue=""
            disabled={isWorking}
            {...register('description', { required: 'باید پر شود' })}
          />
        </FormRow>

        <FormRow label={'Picture'} errors={errors?.image?.message}>
          <input
            className="px-4 py-2 text-xl file:rounded-xl file:border-2 file:bg-blue-500 file:px-4 file:py-2 file:text-xl file:font-semibold file:text-white hover:file:bg-blue-200 hover:file:text-blue-700"
            name="picture"
            type="file"
            id="image"
            accept="image/*"
            {...register('image', {
              required: isEditSession ? false : 'The photo must be uploaded',
            })}
          />
        </FormRow>

        <div className="mx-4 my-0 flex justify-end gap-16">
          <button
            className="rounded-xl border-2 border-gray-200 bg-gray-100 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </button>
          <button
            disabled={isWorking}
            className="rounded-xl border-2 border-blue-900 bg-blue-500 px-4 py-2 text-xl font-semibold text-white hover:bg-blue-400"
          >
            {isEditSession ? 'Edit Cabin' : 'Create new Cabin'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCabinForm;
