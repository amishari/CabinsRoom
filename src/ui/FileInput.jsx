const FileInput = ({ ...props }) => {
  return (
    <div className="flex items-center">
      <input
        type="file"
        className="hidden rounded-sm border text-lg"
        {...props}
      />
      <label
        htmlFor={props.id}
        className="text-brand-50 bg-brand-600 hover:bg-brand-700 mr-3 cursor-pointer rounded-sm px-4 py-2 font-medium transition-colors duration-200"
      >
        Choose File
      </label>
    </div>
  );
};

export default FileInput;
