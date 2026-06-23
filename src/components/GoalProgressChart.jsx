"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GoalProgressChart({
  goals,
}) {
  const data = goals.map(
    (goal) => ({
      name: goal.goalName,
      progress:
        (
          (goal.currentAmount /
            goal.goalAmount) *
          100
        ).toFixed(1),
    })
  );

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="progress" />
      </BarChart>
    </ResponsiveContainer>
  );
}