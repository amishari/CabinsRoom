import Filter from '../../ui/Filter';
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
    </div>
  );
}
export default CabinTableOperation;
