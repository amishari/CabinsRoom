import { useSearchParams } from 'react-router-dom';
import Select from '../Select';

function SortBy({ options, value }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <Select onChange={handleChange} options={options} value={sortBy} />
    </div>
  );
}

export default SortBy;
