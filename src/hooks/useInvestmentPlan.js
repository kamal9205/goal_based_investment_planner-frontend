"use client";

import { useState } from "react";

import {
  generateInvestmentPlan,
} from "@/services/investmentService";

export const useInvestmentPlan =
  () => {
    const [loading, setLoading] = useState(false);

    const [plan, setPlan] = useState(null);
    const [error, setError] = useState("");

    const generatePlan =
      async (formData) => {
        try {
          setLoading(true);

          const response =
            await generateInvestmentPlan(
              formData
            );

          setPlan(response.data);
        } catch (error) {
           console.log(error.response?.data);
            console.log(error.response?.status);
          setError(
            error.response?.data?.message ||
                "Failed to generate plan"
            );
        } finally {
          setLoading(false);
        }
      };

    return {
      loading,
      plan,
      error,
      generatePlan,
    };
  };