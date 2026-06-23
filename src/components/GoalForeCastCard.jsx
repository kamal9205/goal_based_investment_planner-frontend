export default function GoalForecastCard({
  forecast,
}) {
  if (!forecast) return null;

  return (
    <div className="mt-4 bg-slate-50 p-4 rounded-lg">
      <div className="flex justify-between">
        <span>Estimated Years</span>

        <span className="font-semibold">
          {forecast.estimatedYears}
        </span>
      </div>

      <div className="flex justify-between mt-2">
        <span>Status</span>

        <span
          className={
            forecast.isAchievable
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {forecast.isAchievable
            ? "On Track"
            : "At Risk"}
        </span>
      </div>

      <div className="flex justify-between mt-2">
        <span>Remaining Amount</span>

        <span>
          ₹
          {forecast.remainingAmount.toLocaleString()}
        </span>
      </div>
    </div>
  );
}