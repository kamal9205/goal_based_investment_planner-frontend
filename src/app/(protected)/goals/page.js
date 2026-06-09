"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getGoals } from "@/services/goalService";


export default function GoalsPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const data = await getGoals();
      setGoals(data);
    };

    fetchGoals();
  }, []);

  // console.log("Goals Data");
  // console.log(goals);
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          My Goals
        </h1>

        <Link
          href="/goals/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Create Goal
        </Link>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <Link
            href={`/goals/${goal._id}`}
            key={goal._id}
            className="border p-4 rounded-lg"
          >
            <h2 className="font-bold">
              {goal.goalName}
            </h2>

            <p>
              ₹{goal.goalAmount.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}