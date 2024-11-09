import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import createCabin from '../../services/apiCabins';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New Cabin added successfully!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const classInput =
    'rounded-sm border-2 border-gray-300 bg-gray-50 px-5 py-3 shadow-md';

  const classButton =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5 col-start-3 col-end-4';

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function onError(errors) {}
  return (
    <div>
      <form
        className="rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormRow label="Cabin name" errors={errors?.name?.message}>
          <input
            className={classInput}
            type="text"
            id="name"
            disabled={isCreating}
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
            disabled={isCreating}
            {...register('maxCapacity', {
              required: 'باید پر شود',
              min: { value: 1, message: 'Capacity should be at least 1' },
            })}
          />
        </FormRow>

        <FormRow label={'Regular Price'} errors={errors?.regularPrice?.message}>
          <input
            className={classInput}
            type="text"
            id="regularPrice"
            disabled={isCreating}
            {...register('regularPrice', {
              required: 'باید پر شود',
              min: { value: 1, message: 'Capacity should be at least 1' },
            })}
          />
        </FormRow>
        <FormRow label={'Discount amount'} errors={errors?.discount?.message}>
          <input
            className={classInput}
            type="text"
            id="discount"
            defaultValue={0}
            disabled={isCreating}
            {...register('discount', {
              required: 'باید پر شود',
              validate: (value) =>
                value <= getValues().regularPrice ||
                'Discount should be less than regular Price',
            })}
          />
        </FormRow>

        <FormRow label={'Descriptions'} errors={errors?.description?.message}>
          <textarea
            className="bg-gray-0 h-32 w-full rounded-md border-2 border-gray-300 px-5 py-3 shadow-sm"
            type="text"
            id="description"
            defaultValue=""
            disabled={isCreating}
            {...register('description', { required: 'باید پر شود' })}
          />
        </FormRow>

        <FormRow label={'Picture'} errors={errors?.image?.message}>
          <input
            className="mr-5 cursor-pointer bg-zinc-300 px-3 py-5 font-semibold text-gray-700 transition-colors duration-1000 hover:bg-gray-200 hover:text-blue-500"
            name="picture"
            type="file"
            id="image"
            accept="image/*"
            {...register('image', { required: 'The photo must be uploaded' })}
            disabled={isCreating}
          />
        </FormRow>

        <div className="mx-4 my-0 flex justify-end gap-16">
          <button
            className="rounded-xl border-2 border-gray-200 bg-gray-100 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
            type="reset"
          >
            Cancel
          </button>
          <button
            disabled={isCreating}
            className="rounded-xl border-2 border-blue-900 bg-blue-500 px-4 py-2 text-xl font-semibold text-white hover:bg-blue-400"
          >
            Add Cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCabinForm;
