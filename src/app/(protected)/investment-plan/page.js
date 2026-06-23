"use client";

import { useState } from "react";

import {
  useInvestmentPlan,
} from "@/hooks/useInvestmentPlan";

import InvestmentResultCard from "@/components/InvestmentResultCard";

export default function InvestmentPlanPage() {
  const {
    generatePlan,
    loading,
    plan,
    error,
  } = useInvestmentPlan();

  const [formData, setFormData] =
    useState({
      goalAmount: "",
      goalTimeline: "",
      riskProfile: "medium",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await generatePlan(formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Investment Planner
      </h1>
        <p className="text-gray-600 mb-6">
        Your age, income, expenses and savings
        are automatically taken from your
        profile.
        </p>
         {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {error}
            </div>
        )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Goal Amount"
            className="border p-3 rounded"
            value={formData.goalAmount}
            onChange={(e) =>
              setFormData({
                ...formData,
                goalAmount:
                  e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Timeline (Years)"
            className="border p-3 rounded"
            value={formData.goalTimeline}
            onChange={(e) =>
              setFormData({
                ...formData,
                goalTimeline:
                  e.target.value,
              })
            }
          />

          <select
            className="border p-3 rounded"
            value={
              formData.riskProfile
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                riskProfile:
                  e.target.value,
              })
            }
          >
            <option value="low">
              Low Risk
            </option>

            <option value="medium">
              Medium Risk
            </option>

            <option value="high">
              High Risk
            </option>
          </select>
        </div>

        <button
          disabled={loading}
          className="mt-6 bg-black text-white px-6 py-3 rounded"
        >
          {loading
            ? "Generating..."
            : "Generate Plan"}
        </button>
      </form>

      {plan && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <InvestmentResultCard
              title="Required SIP"
              value={`₹${Math.round(
                plan.requiredMonthlySIP
              )}`}
            />

            <InvestmentResultCard
              title="Investment Score"
              value={
                plan.investmentScore
              }
            />

            <InvestmentResultCard
              title="Monthly Surplus"
              value={`₹${Math.round(
                plan.monthlySurplus
              )}`}
            />

            <InvestmentResultCard
              title="Emergency Fund"
              value={`${Math.round(
                plan.emergencyMonths
              )} Months`}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              Recommended Allocation
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <InvestmentResultCard
                title="Equity"
                value={`${plan.portfolioAllocation.equity}%`}
              />

              <InvestmentResultCard
                title="Debt"
                value={`${plan.portfolioAllocation.debt}%`}
              />

              <InvestmentResultCard
                title="Hybrid"
                value={`${plan.portfolioAllocation.hybrid}%`}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}