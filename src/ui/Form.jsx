export default function Form({ type = regular, children }) {
  return (
    <form
      className={`overflow-hidden text-lg ${
        type === 'regular'
          ? 'rounded-md border border-gray-300 bg-gray-100 p-10'
          : 'w-[80rem]'
      }`}
    >
      {children}
    </form>
  );
}
