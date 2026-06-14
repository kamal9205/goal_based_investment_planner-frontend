"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getProfile } from "@/services/userService";

export default function ProtectedRoute({
  children,
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const verifyUser =
      async () => {
        try {
          await getProfile();

          setLoading(false);
        } catch (error) {
          router.replace("/login");
        }
      };

    verifyUser();
  }, [router]);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return children;
}