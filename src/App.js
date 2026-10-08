import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import KPICard from "./components/KPICard";
import Filters from "./components/Filters";
import SalesChart from "./components/SalesChart";
import UsersChart from "./components/UsersChart";
import DataTable from "./components/DataTable";
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [date,setDate] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1">

        {/* Navbar */}
        <Navbar />

        <div className="p-6">

          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Analytics Overview
          </h1>
          <Filters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            date={date}
            setDate={setDate}
          />

          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <KPICard
              title="Total Users"
              value="12,450"
              change="↑ 12.5% this month"
              positive={true}
            />

            <KPICard
              title="Total Sales"
              value="₹48,250"
              change="↑ 8.2% this month"
              positive={true}
            />

            <KPICard
              title="Revenue"
              value="₹72,890"
              change="↑ 15.8% this month"
              positive={true}
            />

            <KPICard
              title="Conversion Rate"
              value="24.8%"
              change="↓ 2.4% this month"
              positive={false}
            />

          </div>
          {/* Sales Chart */}
          <div className="mt-6">
            <SalesChart />
          </div>
          <div className="mt-6">
            <UsersChart/>
          </div>
          <DataTable
            search={search}
            category={category}
            date={date}
          />

        </div>

      </main>

    </div>
  );
}

export default App;