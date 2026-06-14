import { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "@/services/authService";

export const useLogin = () => {
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(formData);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};