export default function RecommendationCard({
  title,
  value,
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-2xl mt-2">
        {value}
      </p>
    </div>
  );
}