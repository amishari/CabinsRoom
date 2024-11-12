function FormRow({ label, errors, children }) {
  const classDiv =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5 [&:not(:last-child)]:border-2 [&:not(:last-child)]:border-gray-200 ';
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center justify-end gap-10 px-0 py-5 first:pt-0 last:pb-0 has-[button]:flex has-[button]:justify-items-end has-[button]:gap-5 [&:not(:last-child)]:border-2 [&:not(:last-child)]:border-gray-100">
      {label && (
        <label className="font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {errors && <span className="text-xl text-red-700">{errors}</span>}
    </div>
  );
}

export default FormRow;
