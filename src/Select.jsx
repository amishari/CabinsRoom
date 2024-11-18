function Select({ options, value, onChange }) {
  return (
    <div>
      <select
        value={value}
        className="rounded-xl border-2 bg-white p-3 text-2xl font-semibold shadow-lg"
        onChange={onChange}
        id=""
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
