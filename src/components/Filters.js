function Filters({
  search,
  setSearch,
  category,
  setCategory,
  date,
  setDate,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm md:flex-row">

      {/* Search */}
      <input
        type="text"
        placeholder="Search month..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

    </div>
  );
}

export default Filters;