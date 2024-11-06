function Cabins() {
  return (
    <>
      <div className="border-gray-150 overflow-hidden rounded-lg border-2 bg-gray-50 px-9 py-5 text-2xl">
        <div className="flex items-center justify-around justify-items-start border-b-2 border-gray-300">
          <h1 className="text-4xl">All Cabins</h1>
          <p>Sort/filter</p>
        </div>{' '}
        <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default Cabins;
