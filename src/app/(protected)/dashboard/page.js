"use client";

import { useEffect, useState } from "react";

import DashboardCard from "@/components/DashboardCard";

import { getDashboard } from "@/services/dashboardService";

export default function DashboardPage() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard =
      async () => {
        try {
          const data =
            await getDashboard();
            console.log(data);
          setDashboard(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }
console.log("Dashboard Data");
console.log(dashboard);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <DashboardCard
          title="Active Goals"
          value={
            dashboard?.activeGoals || 0
          }
        />

        <DashboardCard
          title="Total Goal Amount"
          value={`₹${(dashboard?.totalGoalAmount ?? 0).toLocaleString()}`}
        />

        <DashboardCard
          title="Monthly Investment"
          value={`₹${(dashboard?.monthlyInvestment ?? 0).toLocaleString()}`}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Goal Progress
        </h2>

        <div className="space-y-4">
          {dashboard?.goals?.map(
            (goal) => {
              const progress =
                goal.goalAmount > 0
                  ? (
                      (goal.currentAmount / goal.goalAmount) * 100
                    ).toFixed(1)
                  : 0;

              return (
                <div
                  key={goal._id}
                  className="border rounded p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      {goal.goalName}
                    </span>

                    <span>
                      {progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded">
                    <div
                      className="bg-green-500 h-3 rounded"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}