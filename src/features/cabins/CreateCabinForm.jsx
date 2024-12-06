// import { useForm } from 'react-hook-form';
// import FormRow from '../../ui/FormRow';
// import { useCreateCabin } from './useCreateCabin';
// import { useEditCabin } from './useEditCabin';
// function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
//   const { id: editId, ...editValues } = cabinToEdit;
//   const isEditSession = Boolean(editId);
//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     defaultValues: isEditSession ? editValues : {},
//   });
//   const { errors } = formState;
//   const { isCreating, createCabin } = useCreateCabin();
//   const { isEditing, editCabin } = useEditCabin();
//   const isWorking = isCreating || isEditing;
//   const classInput =
//     'rounded-sm border-2 border-gray-300 bg-gray-50 px-5 py-3 shadow-md';
//   function onSubmit(data) {
//     const image = typeof data.image === 'string' ? data.image : data.image[0];

//     if (isEditSession)
//       editCabin(
//         { newCabinData: { ...data, image }, id: editId },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         },
//       );
//     else
//       createCabin(
//         { ...data, image: image },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         },
//       );
//   }
//   function onError(errors) {}
//   return (
//     <div>
//       <form
//         className={
//           onCloseModal
//             ? 'w-[80rem] overflow-y-hidden text-2xl'
//             : `rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10`
//         }
//         onSubmit={handleSubmit(onSubmit, onError)}
//       >
//         <FormRow label="Cabin name" errors={errors?.name?.message}>
//           <input
//             className={classInput}
//             type="text"
//             id="name"
//             disabled={isWorking}
//             {...register('name', {
//               required: 'باید پر شود',
//               pattern: {
//                 value: /^\d+$/,
//                 message: 'Only number please.',
//               },
//             })}
//           />
//         </FormRow>
//         <FormRow label="Maximum Capacity" errors={errors?.maxCapacity?.message}>
//           <input
//             className={classInput}
//             type="text"
//             id="maxCapacity"
//             disabled={isWorking}
//             {...register('maxCapacity', {
//               required: 'باید پر شود',
//               min: { value: 1, message: 'Capacity should be at least 1' },
//             })}
//           />
//         </FormRow>

//         <FormRow label={'Regular Price'} errors={errors?.regularPrice?.message}>
//           <input
//             className={classInput}
//             type="number"
//             id="regularPrice"
//             disabled={isWorking}
//             {...register('regularPrice', {
//               required: 'باید پر شود',
//               min: { value: 1, message: 'Capacity should be at least 1' },
//             })}
//           />
//         </FormRow>
//         <FormRow label={'Discount amount'} errors={errors?.discount?.message}>
//           <input
//             className={classInput}
//             type="number"
//             id="discount"
//             defaultValue={0}
//             disabled={isWorking}
//             {...register('discount', {
//               required: 'باید پر شود',
//               validate: (value) =>
//                 value <= getValues().regularPrice ||
//                 'Discount should be less than regular Price',
//             })}
//           />
//         </FormRow>

//         <FormRow
//           label={'Description for website'}
//           errors={errors?.description?.message}
//         >
//           <textarea
//             className="bg-gray-0 h-32 w-full rounded-md border-2 border-gray-300 px-5 py-3 shadow-sm"
//             type="text"
//             id="description"
//             defaultValue=""
//             disabled={isWorking}
//             {...register('description', { required: 'باید پر شود' })}
//           />
//         </FormRow>

//         <FormRow label={'Picture'} errors={errors?.image?.message}>
//           <input
//             className="px-4 py-2 text-xl file:rounded-xl file:border-2 file:bg-blue-500 file:px-4 file:py-2 file:text-xl file:font-semibold file:text-white hover:file:bg-blue-200 hover:file:text-blue-700"
//             name="picture"
//             type="file"
//             id="image"
//             accept="image/*"
//             {...register('image', {
//               required: isEditSession ? false : 'The photo must be uploaded',
//             })}
//           />
//         </FormRow>

//         <div className="mx-4 my-0 flex justify-end gap-16">
//           <button
//             className="rounded-xl border-2 border-gray-200 bg-gray-100 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
//             type="reset"
//             onClick={() => onCloseModal?.()}
//           >
//             Cancel
//           </button>
//           <button
//             disabled={isWorking}
//             className="rounded-xl border-2 border-blue-900 bg-blue-500 px-4 py-2 text-xl font-semibold text-white hover:bg-blue-400"
//           >
//             {isEditSession ? 'Edit Cabin' : 'Create new Cabin'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateCabinForm;

import { useForm } from 'react-hook-form';
import { createEditCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <form className="w-[80rem]" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
          type="text"
          id="name"
          disabled={isCreating}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      {/* <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: 'This field is required',
          })}
        />
      </FormRow> */}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </form>
  );
}

export default CreateCabinForm;
