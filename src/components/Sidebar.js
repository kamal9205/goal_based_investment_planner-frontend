"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Goals",
      href: "/goals",
    },
    {
      name: "Create Goal",
      href: "/goals/create",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ];

  return (
    <aside
      className="
      w-64
      bg-slate-900
      text-white
      min-h-screen
      p-6
    "
    >
      <h1 className="text-2xl font-bold mb-8">
        InvestPlanner
      </h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded ${
              pathname === link.href
                ? "bg-slate-700"
                : "hover:bg-slate-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <LogoutButton />
    </aside>
  );
}