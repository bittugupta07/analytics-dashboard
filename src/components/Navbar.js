function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-4 shadow-sm">
      
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back!
        </p>
      </div>

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Download Report
      </button>

    </header>
  );
}

export default Navbar;