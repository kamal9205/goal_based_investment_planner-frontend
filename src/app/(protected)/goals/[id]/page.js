"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { useGoalDetails } from "@/hooks/useGoalDetails";
import { useDeleteGoal } from "@/hooks/useDeleteGoal";

import GoalForecastCard from "@/components/GoalForeCastCard";

export default function GoalDetailsPage() {
  const params = useParams();

  const { goal, loading } =
    useGoalDetails(params.id);

  const { handleDeleteGoal } =
    useDeleteGoal();

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  if (!goal) {
    return (
      <div className="p-8">
        Goal not found
      </div>
    );
  }

  const progress = (
    (goal.currentAmount /
      goal.goalAmount) *
    100
  ).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6">
          {goal.goalName}
        </h1>

        <div className="space-y-4">
          <p>
            <strong>Goal Amount:</strong>{" "}
            ₹
            {goal.goalAmount.toLocaleString()}
          </p>

          <p>
            <strong>Current Amount:</strong>{" "}
            ₹
            {goal.currentAmount.toLocaleString()}
          </p>

          <p>
            <strong>Monthly Investment:</strong>{" "}
            ₹
            {(goal.monthlyInvestment || 0).toLocaleString()}
          </p>

          <p>
            <strong>Target Date:</strong>{" "}
            {new Date(
              goal.targetDate
            ).toLocaleDateString()}
          </p>

          <p>
            <strong>Progress:</strong>{" "}
            {progress}%
          </p>
        </div>

        <div className="w-full bg-gray-200 h-4 rounded mt-4">
          <div
            className="bg-green-500 h-4 rounded"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            href={`/goals/${goal._id}/edit`}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Edit Goal
          </Link>

          <button
            onClick={() =>
              handleDeleteGoal(goal._id)
            }
            className="bg-red-600 text-white px-5 py-2 rounded"
          >
            Delete Goal
          </button>
        </div>
      </div>
      <GoalForecastCard
            forecast={
                goal.forecast
            }
            />
    </div>
  );
}