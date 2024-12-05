function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center justify-end gap-5 px-0 py-5 has-[button]:flex has-[button]:justify-items-end has-[button]:gap-5 [&:not(:last-child)]:border-2 [&:not(:last-child)]:border-gray-100">
      {label && <label className="px-4 font-medium">{label}</label>}
      {children}
      {error && <span className="text-xl text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
