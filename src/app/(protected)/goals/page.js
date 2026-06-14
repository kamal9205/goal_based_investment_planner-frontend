"use client";

import Link from "next/link";
import { useGoals } from "@/hooks/useGoals";

export default function GoalsPage() {
  const { goals, loading } =
    useGoals();

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          My Goals
        </h1>

        <Link
          href="/goals/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Create Goal
        </Link>
      </div>

      <div className="space-y-4">
        {goals.length === 0 ? (
          <p>No goals found.</p>
        ) : (
          goals.map((goal) => {
            const progress = (
              (goal.currentAmount /
                goal.goalAmount) *
              100
            ).toFixed(1);

            return (
              <Link
                key={goal._id}
                href={`/goals/${goal._id}`}
              >
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h2 className="font-semibold text-lg">
                    {goal.goalName}
                  </h2>

                  <p>
                    Goal Amount: ₹
                    {goal.goalAmount.toLocaleString()}
                  </p>

                  <p>
                    Current Amount: ₹
                    {goal.currentAmount.toLocaleString()}
                  </p>

                  <p>
                    Progress: {progress}%
                  </p>
                </div>
              </Link>
            );
          })
        )}
      </div>
      <div className="mt-3">
        {goals.forecast?.onTrack ? (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
            On Track
          </span>
        ) : (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
            Off Track
          </span>
        )}
      </div>
    </div>
  );
}