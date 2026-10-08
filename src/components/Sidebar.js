function Sidebar() {
  return (
    <aside className="hidden md:block w-64 min-h-screen bg-gray-900 text-white p-6">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">
        Analytics
      </h1>

      {/* Navigation */}
      <nav className="space-y-3">

        <div className="bg-blue-600 rounded-lg px-4 py-3 cursor-pointer">
          Dashboard
        </div>

        <div className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer">
          Analytics
        </div>

        <div className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer">
          Users
        </div>

        <div className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer">
          Reports
        </div>

        <div className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer">
          Settings
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;