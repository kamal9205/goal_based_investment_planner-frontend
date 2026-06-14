"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createGoal } from "@/services/goalService";

export const useCreateGoal = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCreateGoal = async (goalData) => {
    try {
      setLoading(true);

      await createGoal(goalData);

      router.push("/goals");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleCreateGoal,
  };
};