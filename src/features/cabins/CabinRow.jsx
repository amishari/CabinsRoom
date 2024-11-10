import { useState } from 'react';
import CreateEditCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
function CabinRow({ cabin }) {
  const [show, setShow] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,

    discount,
    image,
  } = cabin;
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
      {discount ? (
        <div className="text-2xl font-semibold text-green-800">{discount}</div>
      ) : (
        <span className="font-bold text-green-800">&mdash;</span>
      )}
      <div className="flex justify-between gap-4">
        <button
          onClick={() => setShow((show) => !show)}
          className="rounded-xl border-2 border-x-gray-200 bg-orange-300 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
        >
          Edit
        </button>
        <button
          onClick={() => deleteCabin(cabinId)}
          disabled={isDeleting}
          className="rounded-xl border-2 border-x-gray-200 bg-red-300 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
        >
          Delete
        </button>
      </div>
      {show && <CreateEditCabinForm cabinToEdit={cabin} />}
    </div>
  );
}

export default CabinRow;
