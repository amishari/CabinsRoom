import CabinRow from '../features/cabins/CabinRow';
import Spinner from '../ui/Spinner';
import CabinHeaderRow from '../features/cabins/CabinHeaderRow';
import CabinHeader from '../features/cabins/CabinHeader';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import { useState } from 'react';
import { useCabins } from '../features/cabins/useCabins';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="border-gray-150 overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 px-9 py-5 text-2xl">
        <CabinHeader />
        <CabinHeaderRow />
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
      <button
        onClick={() => setShowForm((show) => !show)}
        className="my-4 w-full rounded-md border-2 border-blue-900 bg-blue-500 px-4 py-4 text-xl font-semibold text-white hover:bg-blue-400"
      >
        Add new Cabin
      </button>
      {showForm && <CreateCabinForm />}
    </>
  );
}
export default Cabins;
