import { useQuery } from '@tanstack/react-query';
import CabinRow from '../features/cabins/CabinRow';
import { getCabins } from '../services/apiCabins';
import Spinner from '../ui/Spinner';
import CabinHeaderRow from '../features/cabins/CabinHeaderRow';
import CabinHeader from '../features/cabins/CabinHeader';

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
        <CabinHeader />
        <CabinHeaderRow />
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}
export default Cabins;
