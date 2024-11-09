function FormRow({ label, errors, children }) {
  const classDiv =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5';
  return (
    <div className={classDiv}>
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
