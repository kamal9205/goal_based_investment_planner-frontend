"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/authService";
export default function LogoutButton() {
  const router = useRouter();

  const handleLogout =
  async () => {
    try {
      await logoutUser();

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="
        w-full
        mt-8
        bg-red-600
        text-white
        py-2
        rounded
      "
    >
      Logout
    </button>
  );
}