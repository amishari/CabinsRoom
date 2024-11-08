function CreateCabinForm() {
  const classInput =
    'rounded-sm border-2 border-gray-300 bg-gray-50 px-5 py-3 shadow-md';
  const classDiv =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5';
  const classButton =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5 col-start-3 col-end-4';
  return (
    <div>
      <form
        className="rounded-md border-2 border-gray-200 bg-gray-50 px-16 py-10"
        action=""
      >
        <div className={classDiv}>
          <label className="font-medium" htmlFor="name">
            Cabin Name
          </label>
          <input className={classInput} type="text" id="name" />
        </div>

        <div className={classDiv}>
          <label className="font-medium" htmlFor="maxCapacity">
            Maximum Capacity
          </label>
          <input className={classInput} type="number" id="maxCapacity" />
        </div>

        <div className={classDiv}>
          <label className="font-medium" htmlFor="regularPrice">
            Regular Price
          </label>
          <input className={classInput} type="number" id="regularPrice" />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="discount">
            Discount
          </label>
          <input
            className={classInput}
            type="number"
            id="discount"
            defaultValue={0}
          />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="description">
            Description for website
          </label>
          <textarea
            className="bg-gray-0 h-32 w-full rounded-md border-2 border-gray-300 px-5 py-3 shadow-sm"
            type="text"
            id="description"
            defaultValue=""
          />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="image">
            Cabin Photo
          </label>
          <input
            className={classInput}
            // type="url"
            id="image"
            accept="image/*"
          />
          {/*
          <FileInput id="image" accept="image/*" />
          const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`; */}
        </div>
        <div className="mx-4 my-0 flex justify-end gap-16">
          <button
            className="rounded-2xl border-2 border-gray-200 bg-gray-100 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-gray-400"
            type="reset"
          >
            Cancel
          </button>
          <button className="rounded-2xl border-2 border-green-200 bg-green-400 px-4 py-2 text-xl font-semibold text-gray-950 hover:bg-green-400">
            Edit Cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCabinForm;
