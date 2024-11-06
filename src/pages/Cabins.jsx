import { useQuery } from '@tanstack/react-query';
import CabinRow from '../features/cabins/CabinRow';
import { getCabins } from '../services/apiCabins';
import Spinner from '../ui/Spinner';

function Cabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="border-gray-150 overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 px-9 py-5 text-2xl">
        <div className="mb-14 flex items-center justify-around justify-items-start border-gray-300">
          <h1 className="text-4xl">All Cabins</h1>
          <p>Sort/filter</p>
        </div>{' '}
        <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-10 rounded-lg border-2 border-gray-200 p-6">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </div>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}
export default Cabins;
