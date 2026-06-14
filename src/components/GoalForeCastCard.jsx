export default function GoalForecastCard({
  forecast,
}) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-semibold mb-4">
        Forecast
      </h3>

      <div className="space-y-2">
        <p>
          Remaining:
          ₹
          {forecast.remainingAmount.toLocaleString()}
        </p>

        <p>
          Estimated Years:
          {
            forecast.estimatedYears
          }
        </p>

        <p>
          Status:
          {forecast.onTrack
            ? " ✅ On Track"
            : " ❌ Off Track"}
        </p>
      </div>
    </div>
  );
}