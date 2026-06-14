"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateGoal } from "@/services/goalService";

export const useUpdateGoal = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleUpdateGoal = async (
    id,
    goalData
  ) => {
    try {
      setLoading(true);

      await updateGoal(id, goalData);

      router.push(`/goals/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleUpdateGoal,
  };
};