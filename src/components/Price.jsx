function Price() {
  return (
    <div className="mt-14">
      <h2 className="font-semibold text-lg mb-4">Price</h2>
      <input type="range" />
      <div className="flex gap-10 mt-4">
        <div className="flex flex-col">
          <span>Min</span>
          <input type="text" className="bg-gray-100 h-8 w-16 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <span>Max</span>
          <input type="text" className="bg-gray-100 h-8 w-16 rounded-lg" />
        </div>
      </div>
      <div className="mt-4 flex gap-10">
        <button className="bg-green-600 p-2 rounded-lg font-semibold text-white">
          Apply
        </button>
        <button className="bg-gray-100 p-2 rounded-lg font-semibold text-black">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Price;
