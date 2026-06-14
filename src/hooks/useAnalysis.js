"use client";

import { useEffect, useState } from "react";

import {
  getAnalysis,
} from "@/services/userService";

export const useAnalysis = () => {
  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const response =
            await getAnalysis();

          setAnalysis(
            response.data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchData();
  }, []);

  return {
    analysis,
    loading,
  };
};