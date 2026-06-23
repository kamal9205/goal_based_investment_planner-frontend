"use client";

import { useEffect, useState } from "react";

import {
  getRecommendations,
} from "@/services/recommendationService";

export const useRecommendations =
  () => {
    const [
      recommendations,
      setRecommendations,
    ] = useState(null);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {
      const fetchData =
        async () => {
          try {
            const data =
              await getRecommendations();

            setRecommendations(
              data.data
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
      recommendations,
      loading,
    };
  };