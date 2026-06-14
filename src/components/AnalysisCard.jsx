"use client";

export default function AnalysisCards({
  analysis,
}) {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">
      <div className="bg-white p-4 rounded shadow">
        <h3>Monthly Surplus</h3>

        <p className="font-bold">
          ₹
          {analysis.monthlySurplus?.toLocaleString()}
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3>Savings Rate</h3>

        <p className="font-bold">
          {analysis.savingsRate}%
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3>Investment Score</h3>

        <p className="font-bold">
          {
            analysis.investmentScore
          }
          /30
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3>Risk Category</h3>

        <p className="font-bold">
          {
            analysis.riskCategory
          }
        </p>
      </div>
    </div>
  );
}

