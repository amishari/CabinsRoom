import CabinTableOperation from './CabinTableOperation';
function CabinHeader() {
  return (
    <div className="flex items-center justify-between border-gray-300 p-8">
      <h1 className="text-4xl">All Cabins</h1>
      <CabinTableOperation />
    </div>
  );
}

export default CabinHeader;
