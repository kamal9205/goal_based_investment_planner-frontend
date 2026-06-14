"use client";

import Link from "next/link";
import { useRegister } from "@/hooks/useRegister";

export default function RegisterPage() {
  const {
    formData,
    loading,
    handleChange,
    handleSubmit,
  } = useRegister();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Start planning your investments
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}