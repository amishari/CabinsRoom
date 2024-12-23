import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
function BookingTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="status"
        options={[
          { value: 'all', label: 'All' },
          { value: 'checked-out', label: 'Checked out' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />
      <SortBy
        options={[
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalprice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalprice-asc', label: 'Sort by amount (low first)' },
        ]}
      />
    </div>
  );
}

export default BookingTableOperations;
