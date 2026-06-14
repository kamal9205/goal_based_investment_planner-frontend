"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import GoalForm from "@/components/GoalForm";

import { useGoalDetails } from "@/hooks/useGoalDetails";
import { useUpdateGoal } from "@/hooks/useUpdateGoal";

export default function EditGoalPage() {
  const { id } = useParams();

  const { goal, loading } =
    useGoalDetails(id);

  const {
    loading: updating,
    handleUpdateGoal,
  } = useUpdateGoal();

  const [formData, setFormData] =
    useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!goal) {
    return (
      <div>Goal not found</div>
    );
  }

  const data =
    formData || {
      goalName: goal.goalName,
      goalAmount: goal.goalAmount,
      currentAmount: goal.currentAmount,
      monthlyInvestment:
        goal.monthlyInvestment || 0,
      targetDate:
        goal.targetDate?.split(
          "T"
        )[0],
      priority:
        goal.priority || "medium",
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateGoal(id, data);
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Edit Goal
      </h1>

      <GoalForm
        formData={data}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Update Goal"
        loading={updating}
      />
    </div>
  );
}