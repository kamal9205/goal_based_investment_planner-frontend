"use client";

import { useEffect, useState } from "react";
import { getGoalById, deleteGoal } from "@/services/goalService";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function GoalDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [goal, setGoal] = useState(null);

    useEffect(() => {
        const fetchGoal =
            async () => {
                const data =
                    await getGoalById(id);

                setGoal(data);
            };

        fetchGoal();
    }, [id]);

    if (!goal) {
        return <p>Loading...</p>;
    }

    const progress =
        (
            (goal.currentAmount /
                goal.goalAmount) *
            100
        ).toFixed(1);

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this goal?");

        if (!confirmed) return;

        try {
            await deleteGoal(id);
            alert("Goal deleted successfully");

            router.push("/goals");
        } catch (error) {
            console.log(error);

            alert(
                "Failed to delete goal"
            );
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">
                {goal.goalName}
            </h1>

            <div className="space-y-3">
                <p>
                    Goal Amount:
                    ₹{goal.goalAmount.toLocaleString()}
                </p>

                <p>
                    Current Amount:
                    ₹{goal.currentAmount.toLocaleString()}
                </p>

                <p>
                    Monthly Investment:
                    ₹{goal.monthlyInvestment?.toLocaleString() || 0}
                </p>

                <p>
                    Progress: {progress}%
                </p>
            </div>
            
            <div className="flex gap-4 mt-8">

                <Link
                    href={`/goals/${id}/edit`}
                    className="
                        bg-blue-600
                        text-white
                        px-5
                        py-2
                        rounded
                        hover:bg-blue-700
                        ">
                    Edit Goal
                </Link>

                <button
                    onClick={handleDelete}
                    className="
                        bg-red-600
                        text-white
                        px-5
                        py-2
                        rounded
                        hover:bg-red-700
                        ">
                    Delete Goal
                </button>
            </div>
        </div>
    );
}