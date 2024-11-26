import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 10;
export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  const styles =
    'active:[&_span:has(:last-child)]:pl-1.5 [&_span:has(:first-child)]:pr-1.5 flex items-center justify-center rounded-xl border-none bg-white px-5 py-2.5 text-2xl font-semibold text-gray-600 transition-all duration-300  [&:hover:not(:disabled)]:bg-indigo-100 [&:hover:not(:disabled)]:text-indigo-600';
  const iconStyles = 'h-7 w-7 text-indigo-400 ';
  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-3.5 pr-2 text-2xl [&_span]:font-semibold">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div className="flex gap-11">
        <button
          className={styles}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className={iconStyles} />
          <span>Previous</span>
        </button>
        <button
          className={styles}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>next</span>
          <HiChevronRight className={iconStyles} />
        </button>
      </div>
    </div>
  );
}
