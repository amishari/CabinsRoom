export default function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}) {
  return (
    <div className="flex gap-3">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        className="h-12 w-12 origin-left text-indigo-600 accent-blue-500 outline-offset-4 disabled:accent-indigo-600"
      />
      <label
        className="flex flex-1 items-center gap-6"
        htmlFor={!disabled ? id : ''}
      >
        {children}
      </label>
    </div>
  );
}
