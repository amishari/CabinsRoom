function CreateCabinForm() {
  const classInput =
    'rounded-sm border-2 border-gray-300 bg-gray-50 px-5 py-3 shadow-md';
  const classDiv =
    'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5';
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
          <label className="font-medium" htmlFor="name">
            Maximum Capacity
          </label>
          <input className={classInput} type="number" id="maxCapacity" />
        </div>

        <div className={classDiv}>
          <label className="font-medium" htmlFor="name">
            Regular Price
          </label>
          <input className={classInput} type="number" id="regularPrice" />
        </div>
        <div className={classDiv}>
          <label className="font-medium" htmlFor="name">
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
          <label className="font-medium" htmlFor="name">
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
          <label className="font-medium" htmlFor="name">
            Cabin Photo
          </label>
          <input
            className={classInput}
            type="url"
            id="image"
            accept="image/*"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateCabinForm;
