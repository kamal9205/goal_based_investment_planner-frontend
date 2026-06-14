"use client";

import {
  useState,
  useEffect,
} from "react";

import {
  getAnalysis,
} from "@/services/profileService";

export const useProfileAnalysis =
  () => {
    const [analysis, setAnalysis] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {
      const fetchAnalysis =
        async () => {
          try {
            const data =
              await getAnalysis();

            setAnalysis(
              data.data
            );
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };

      fetchAnalysis();
    }, []);

    return {
      analysis,
      loading,
    };
  };