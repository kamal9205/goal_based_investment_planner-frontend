"use client";

import { useState } from "react";
import { deleteGoal } from "@/services/goalService";
import { useRouter } from "next/navigation";

export const useDeleteGoal = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleDeleteGoal = async (
    id
  ) => {
    const confirmed =
      window.confirm(
        "Delete this goal?"
      );

    if (!confirmed) return;

    try {
      setLoading(true);

      await deleteGoal(id);

      router.push("/goals");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleDeleteGoal,
  };
};