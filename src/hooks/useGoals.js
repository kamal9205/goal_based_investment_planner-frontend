"use client";

import { useEffect, useState } from "react";
import { getGoals } from "@/services/goalService";

export const useGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = async () => {
    try {
      const response = await getGoals();

      setGoals(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return {
    goals,
    loading,
    fetchGoals,
  };
};