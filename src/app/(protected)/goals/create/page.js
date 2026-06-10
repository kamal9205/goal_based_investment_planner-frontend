"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createGoal } from "@/services/goalService";

export default function CreateGoalPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    goalName: "",
    goalAmount: "",
    currentAmount: "",
    monthlyInvestment: "",
    targetDate: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createGoal({
        ...formData,
        goalAmount: Number(
          formData.goalAmount
        ),
        currentAmount: Number(
          formData.currentAmount
        ),
        monthlyInvestment: Number(
          formData.monthlyInvestment
        ),
      });

      router.push("/goals");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Create Goal
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="goalName"
          placeholder="Goal Name"
          value={formData.goalName}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="number"
          name="goalAmount"
          placeholder="Goal Amount"
          value={formData.goalAmount}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="number"
          name="currentAmount"
          placeholder="Current Amount"
          value={formData.currentAmount}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="number"
          name="monthlyInvestment"
          placeholder="Monthly Investment"
          value={
            formData.monthlyInvestment
          }
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="date"
          name="targetDate"
          value={formData.targetDate}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded"
        >
          {loading
            ? "Creating..."
            : "Create Goal"}
        </button>
      </form>
    </div>
  );
}