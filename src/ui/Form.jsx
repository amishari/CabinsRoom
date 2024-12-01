export default function Form({ children }) {
  return (
    <form className="overflow-hidden rounded-md border-2 border-gray-100 bg-white px-16 py-10 text-2xl">
      {children}
    </form>
  );
}
