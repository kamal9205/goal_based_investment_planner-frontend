export default function InvestmentResultCard({
  title,
  value,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}