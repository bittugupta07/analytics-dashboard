import { useState } from "react";

const tableData = [
  {
    month: "January",
    category: "Electronics",
    sales: "$4,000",
    users: 1200,
    date: "2026-01-01",
  },
  {
    month: "February",
    category: "Clothing",
    sales: "$5,200",
    users: 1800,
    date: "2026-02-01",
  },
  {
    month: "March",
    category: "Food",
    sales: "$4,800",
    users: 1500,
    date: "2026-03-01",
  },
  {
    month: "April",
    category: "Electronics",
    sales: "$6,500",
    users: 2300,
    date: "2026-04-01",
  },
  {
    month: "May",
    category: "Clothing",
    sales: "$7,200",
    users: 2800,
    date: "2026-05-01",
  },
  {
    month: "June",
    category: "Food",
    sales: "$6,800",
    users: 3200,
    date: "2026-06-01",
  },
];

function DataTable({ search, category, date }) {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = tableData.filter((item) => {
    const matchesSearch = item.month
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    const matchesDate =
      date === "" || item.date === date;

    return matchesSearch && matchesCategory && matchesDate;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;

    let valueA = a[sortField];
    let valueB = b[sortField];

    if (sortField === "sales") {
      valueA = Number(valueA.replace("$", "").replace(",", ""));
      valueB = Number(valueB.replace("$", "").replace(",", ""));
    }

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });

  return (
    <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">

      {/* Heading */}
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800">
          Sales Data
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>

              {/* Month */}
              <th
                onClick={() => handleSort("month")}
                className="cursor-pointer px-6 py-4 text-sm font-semibold hover:bg-gray-200"
              >
                Month{" "}
                {sortField === "month" &&
                  (sortOrder === "asc" ? "↑" : "↓")}
              </th>

              {/* Category */}
              <th className="px-6 py-4 text-sm font-semibold">
                Category
              </th>

              {/* Sales */}
              <th
                onClick={() => handleSort("sales")}
                className="cursor-pointer px-6 py-4 text-sm font-semibold hover:bg-gray-200"
              >
                Sales{" "}
                {sortField === "sales" &&
                  (sortOrder === "asc" ? "↑" : "↓")}
              </th>

              {/* Users */}
              <th
                onClick={() => handleSort("users")}
                className="cursor-pointer px-6 py-4 text-sm font-semibold hover:bg-gray-200"
              >
                Users{" "}
                {sortField === "users" &&
                  (sortOrder === "asc" ? "↑" : "↓")}
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    {item.month}
                  </td>

                  <td className="px-6 py-4">
                    {item.category}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {item.sales}
                  </td>

                  <td className="px-6 py-4">
                    {item.users}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default DataTable;