"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
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