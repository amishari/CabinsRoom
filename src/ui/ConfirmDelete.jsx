function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div>
      <div className="flex w-[40rem] flex-col gap-5">
        <h3 className="text-4xl font-semibold">Delete {resourceName}</h3>
        <p className="mb-5 text-gray-500">
          Are you sure to delete this {resourceName} permanently? This action
          cannot be undone.
        </p>
      </div>
      <div>
        <button
          className="border-2 border-gray-200 bg-white px-10 py-5 text-2xl font-semibold text-gray-600 hover:bg-gray-100"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className="bg-red-700 px-10 py-5 text-2xl font-semibold text-red-100 hover:bg-red-800"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
