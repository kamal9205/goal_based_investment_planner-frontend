"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
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

    const res = await fetch(
      "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 shadow-lg rounded-xl"
      >
        <h1 className="text-2xl font-bold mb-4">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-3 mb-4"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white p-3 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}