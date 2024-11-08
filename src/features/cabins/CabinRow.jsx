import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin successfully deleted!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });
  const queryClient = useQueryClient();
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] justify-items-start gap-10 rounded-lg border-2 border-b border-gray-200 px-10 py-6 last:border-b-0">
      <img
        className="aspect-[3/2] w-28 scale-150 object-cover object-center"
        src={image}
        alt="not"
        srcset=""
      />
      <div className="text-2xl font-semibold text-gray-600">{name}</div>
      <div className="text-2xl font-semibold">
        Suitable for {maxCapacity} persons
      </div>
      <div className="text-2xl font-semibold">{regularPrice}</div>
      <div className="text-2xl font-semibold text-gray-800">{discount}</div>
      <button
        onClick={() => mutate(cabinId)}
        disabled={isDeleting}
        className="rounded-xl border-2 border-x-gray-200 bg-gray-100 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
      >
        Delete
      </button>
    </div>
  );
}

export default CabinRow;
