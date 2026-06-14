"use client";

import { useEffect, useState } from "react";
import { getGoalById } from "@/services/goalService";

export const useGoalDetails = (id) => {
  const [goal, setGoal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const response = await getGoalById(id);

        setGoal(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGoal();
    }
  }, [id]);

  return {
    goal,
    loading,
  };
};