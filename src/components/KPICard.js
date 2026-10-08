function KPICard({ title, value, change, positive }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-800">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-600" : "text-red-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
}

export default KPICard;