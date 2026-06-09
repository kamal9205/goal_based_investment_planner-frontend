"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  getGoalById,
  updateGoal,
} from "@/services/goalService";

export default function EditGoalPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      goalName: "",
      goalAmount: "",
      currentAmount: "",
      monthlyInvestment: "",
      targetDate: "",
      priority: "medium",
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const goal =
          await getGoalById(id);

        setFormData({
          goalName: goal.goalName,
          goalAmount: goal.goalAmount,
          currentAmount:
            goal.currentAmount,
          monthlyInvestment:
            goal.monthlyInvestment || 0,
          targetDate:
            goal.targetDate
              .split("T")[0],
          priority:
            goal.priority ||
            "medium",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoal();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await updateGoal(
          id,
          formData
        );

        alert(
          "Goal updated successfully"
        );

        router.push(
          `/goals/${id}`
        );
      } catch (error) {
        console.log(error);

        alert(
          "Failed to update goal"
        );
      }
    };

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Edit Goal
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="goalName"
          value={formData.goalName}
          onChange={handleChange}
          placeholder="Goal Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="goalAmount"
          value={formData.goalAmount}
          onChange={handleChange}
          placeholder="Goal Amount"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="currentAmount"
          value={formData.currentAmount}
          onChange={handleChange}
          placeholder="Current Amount"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="monthlyInvestment"
          value={
            formData.monthlyInvestment
          }
          onChange={handleChange}
          placeholder="Monthly Investment"
          className="w-full border p-3 rounded"
        />

        <input
          type="date"
          name="targetDate"
          value={formData.targetDate}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="low">
            Low
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="high">
            High
          </option>
        </select>

        <button
          type="submit"
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded
            w-full
          "
        >
          Update Goal
        </button>

      </form>
    </div>
  );
}