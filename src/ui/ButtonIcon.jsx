export default function ButtonIcon({ children }) {
  return (
    <button className="rounded-sm border-0 bg-none transition-all duration-200 first:h-9 first:w-9 first:text-indigo-600 hover:bg-gray-100">
      {children}
    </button>
  );
}
