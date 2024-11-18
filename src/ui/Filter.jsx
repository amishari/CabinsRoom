import { useSearchParams } from 'react-router-dom';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const but =
    'active:bg-blue-300 hover:bg-blue-600 hover:text-brand-50 active:text-brand-50 rounded-xl border-none bg-white px-[0.8rem] py-[0.44rem] text-[1.4rem] font-semibold transition-all duration-400 disabled:opacity-50';
  function handleClick(value) {
    searchParams.set('discount', value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex gap-1.5 rounded-sm border-2 bg-white p-1.5 shadow-sm">
      <button onClick={() => handleClick('all')} className={but}>
        All
      </button>
      <button onClick={() => handleClick('no-discount')} className={but}>
        No Discount
      </button>
      <button onClick={() => handleClick('with-discount')} className={but}>
        With Discount
      </button>
    </div>
  );
}
export default Filter;
