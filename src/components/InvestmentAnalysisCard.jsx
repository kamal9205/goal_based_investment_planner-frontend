export default function InvestmentAnalysisCard({
  analysis,
}) {
  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        Investment Analysis
      </h2>

      <p>
        Monthly Surplus: ₹
        {analysis.monthlySurplus}
      </p>

      <p>
        Savings Rate:
        {analysis.savingsRate}%
      </p>

      <p>
        Emergency Months:
        {analysis.emergencyMonths}
      </p>

      <p>
        Score:
        {analysis.investmentScore}
      </p>

      <p>
        Risk Category:
        {analysis.riskCategory}
      </p>

      <p>
        Equity:
        {
          analysis
            .recommendedAllocation
            .equity
        }
        %
      </p>

      <p>
        Debt:
        {
          analysis
            .recommendedAllocation
            .debt
        }
        %
      </p>

      <p>
        Hybrid:
        {
          analysis
            .recommendedAllocation
            .hybrid
        }
        %
      </p>
    </div>
  );
}