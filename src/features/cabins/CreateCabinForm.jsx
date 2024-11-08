import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import createCabin from '../../services/apiCabins';
import toast from 'react-hot-toast';

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
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
  const classDiv =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5';
  const classButton =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5 col-start-3 col-end-4';

  function onSubmit(data) {
    mutate(data);
  }
  return (
    <div>
      <form
        className="rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classDiv}>
          <label className="font-medium" htmlFor="name">
            Cabin Name
          </label>
          <input
            className={classInput}
            type="text"
            id="name"
            {...register('name')}
          />
        </div>

        <div className={classDiv}>
          <label className="font-medium" htmlFor="maxCapacity">
            Maximum Capacity
          </label>
          <input
            className={classInput}
            type="number"
            id="maxCapacity"
            {...register('maxCapacity')}
          />
        </div>

        <div className={classDiv}>
          <label className="font-medium" htmlFor="regularPrice">
            Regular Price
          </label>
          <input
            className={classInput}
            type="number"
            id="regularPrice"
            {...register('regularPrice')}
          />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="discount">
            Discount
          </label>
          <input
            className={classInput}
            type="number"
            id="discount"
            defaultValue={0}
            {...register('discount')}
          />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="description">
            Description for website
          </label>
          <textarea
            className="bg-gray-0 h-32 w-full rounded-md border-2 border-gray-300 px-5 py-3 shadow-sm"
            type="text"
            id="description"
            defaultValue=""
            {...register('description')}
          />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="image">
            Cabin Photo
          </label>
          <input
            className={classInput}
            // type="url"
            id="image"
            accept="image/*"
            // {...register('image')}
          />
        </div>
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
