"use client";

import {
  useRecommendations,
} from "@/hooks/useRecommendations";
import RecommendationCard from "@/components/Recommendation";
import AllocationCard from "@/components/AllocationCard";
export default function RecommendationsPage() {
  const {
    recommendations,
    loading,
  } = useRecommendations();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recommendations) {
    return (
      <div className="p-8">
        Unable to load recommendations
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Investment Recommendations
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <RecommendationCard
          title="Risk Category"
          value={
            recommendations.riskCategory
          }
        />

        <RecommendationCard
          title="Expected Return"
          value={`${recommendations.expectedReturn}%`}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Recommended Allocation
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <AllocationCard
            title="Equity"
            percentage={
                recommendations
                .recommendedAllocation
                .equity
            }
            />

            <AllocationCard
            title="Debt"
            percentage={
                recommendations
                .recommendedAllocation
                .debt
            }
            />

            <AllocationCard
            title="Hybrid"
            percentage={
                recommendations
                .recommendedAllocation
                .hybrid
            }
            />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Recommended Funds
        </h2>

        <ul className="space-y-3">
          {recommendations.recommendedFunds.map(
            (fund) => (
              <li
                key={fund}
                className="border-b pb-2"
              >
                {fund}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Why This Recommendation?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {recommendations.rationale}
        </p>
      </div>
    </div>
  );
}