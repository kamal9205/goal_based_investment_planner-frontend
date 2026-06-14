"use client";

import { useState } from "react";

import GoalForm from "@/components/GoalForm";
import { useCreateGoal } from "@/hooks/useCreateGoal";

export default function CreateGoalPage() {
  const { loading, handleCreateGoal } =
    useCreateGoal();

  const [formData, setFormData] =
    useState({
      goalName: "",
      goalAmount: "",
      currentAmount: "",
      monthlyInvestment: "",
      targetDate: "",
      priority: "medium",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCreateGoal(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Create Goal
      </h1>

      <GoalForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Create Goal"
        loading={loading}
      />
    </div>
  );
}