import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
function CabinTableOperation() {
  return (
    <div className="flex items-center gap-2">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'with Discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by Name(A-Z)' },
          { value: 'name-des', label: 'Sort by Name(Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by Price(High to Low)' },
          { value: 'regularPrice-des', label: 'Sort by Price(Low to High)' },
          { value: 'maxCapacity-asc', label: 'Sort by Capacity(High to Low)' },
          { value: 'maxCapacity-des', label: 'Sort by Capacity(Low to High)' },
        ]}
      />
    </div>
  );
}
export default CabinTableOperation;
