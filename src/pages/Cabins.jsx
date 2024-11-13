import CabinRow from '../features/cabins/CabinRow';
import Spinner from '../ui/Spinner';
import CabinHeaderRow from '../features/cabins/CabinHeaderRow';
import CabinHeader from '../features/cabins/CabinHeader';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import { useCabins } from '../features/cabins/useCabins';
import AddNewCabin from '../features/cabins/AddNewCabin';

function Cabins() {
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
        <AddNewCabin />
      </div>
    </>
  );
}
export default Cabins;
