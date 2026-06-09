export default function DashboardCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}