"use client";

import { useEffect, useState } from "react";

import {
  getProfile,
  updateProfile,
} from "@/services/profileService";

export const useProfile = () => {
  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
      age: "",
      monthlyIncome: "",
      monthlyExpenses: "",
      currentSavings: "",
      emergencyFund: "",
      dependents: "",
      riskAppetite: "medium",
    });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response =
          await getProfile();

        const profile =
          response.data;

        setFormData({
          age: 
            profile.age ?? 
            "",
          monthlyIncome:
            profile.monthlyIncome ??
            "",

          monthlyExpenses:
            profile.monthlyExpenses ??
            "",

          currentSavings:
            profile.currentSavings ??
            "",

          emergencyFund:
            profile.emergencyFund ??
            "",

          dependents:
            profile.dependents ??
            "",

          riskAppetite:
            profile.riskAppetite ??
            "medium",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e
  ) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile =
    async (e) => {
      e.preventDefault();

      try {
        setSaving(true);

        await updateProfile(
          formData
        );

        alert(
          "Profile updated successfully"
        );
      } catch (error) {
        console.log(error);
      } finally {
        setSaving(false);
      }
    };

  return {
    formData,
    handleChange,
    saveProfile,
    loading,
    saving,
  };
};