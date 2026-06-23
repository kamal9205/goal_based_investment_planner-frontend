export default function AllocationCard({
  title,
  percentage,
}) {
  return (
    <div className="border rounded p-4 text-center">
      <h3 className="font-medium">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {percentage}%
      </p>
    </div>
  );
}