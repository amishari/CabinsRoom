export default function FormRowVertical({ label, children, error }) {
  return (
    <div className="flex flex-col gap-3 px-0 py-5">
      {label && (
        <label className="px-4 font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-xl text-red-700">{errors}</span>}
    </div>
  );
}
