import CabinRow from '../features/cabins/CabinRow';
import Spinner from '../ui/Spinner';
import CabinHeaderRow from '../features/cabins/CabinHeaderRow';
import CabinHeader from '../features/cabins/CabinHeader';
import { useCabins } from '../features/cabins/useCabins';
import AddNewCabin from '../features/cabins/AddNewCabin';
import Menus from '../ui/Menus';
import { useSearchParams } from 'react-router-dom';

function Cabins() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all'; // for the first time opening cabin page avoid null value.

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  //2 ) Sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? -1 : 1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  return (
    <div className="border-gray-150 overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 px-9 py-5 text-2xl">
      <CabinHeader />
      <CabinHeaderRow />
      {sortedCabins.map((cabin) => (
        <CabinRow data={cabin} key={cabin.id} />
      ))}
      <AddNewCabin />
    </div>
  );
}
export default Cabins;
