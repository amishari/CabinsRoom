function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-6 px-0 py-3">
      <span className="flex items-center gap-[0.8rem] font-semibold">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}
export default DataItem;
