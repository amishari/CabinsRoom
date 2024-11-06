function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] justify-items-start gap-10 rounded-lg border-2 border-b border-gray-200 px-10 py-6 last:border-b-0">
      <img
        className="aspect-[3/2] w-28 scale-150 object-cover object-center"
        src={image}
        alt="not"
        srcset=""
      />
      <div className="text-2xl font-semibold text-gray-600">{name}</div>
      <div className="text-2xl font-semibold">{maxCapacity}</div>
      <div className="text-2xl font-semibold">{regularPrice}</div>
      <div className="text-2xl font-semibold text-gray-800">{discount}</div>
    </div>
  );
}

export default CabinRow;
