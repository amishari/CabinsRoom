export default function Input({
  type,
  onChange,
  id,
  value,
  autoComplete,
  disabled,
}) {
  return (
    <input
      className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
      type={type}
      onChange={onChange}
      id={id}
      value={value}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  );
}
