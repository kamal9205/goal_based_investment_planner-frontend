"use client";

export default function GoalForm({
  formData,
  setFormData,
  handleSubmit,
  buttonText,
  loading,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Goal Name"
        className="border p-3 w-full rounded"
        value={formData.goalName}
        onChange={(e) =>
          setFormData({
            ...formData,
            goalName: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Goal Amount"
        className="border p-3 w-full rounded"
        value={formData.goalAmount}
        onChange={(e) =>
          setFormData({
            ...formData,
            goalAmount: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Current Amount"
        className="border p-3 w-full rounded"
        value={formData.currentAmount}
        onChange={(e) =>
          setFormData({
            ...formData,
            currentAmount: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Monthly Investment"
        className="border p-3 w-full rounded"
        value={formData.monthlyInvestment}
        onChange={(e) =>
          setFormData({
            ...formData,
            monthlyInvestment:
              e.target.value,
          })
        }
      />

      <input
        type="date"
        className="border p-3 w-full rounded"
        value={formData.targetDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            targetDate: e.target.value,
          })
        }
      />

      <select
        className="border p-3 w-full rounded"
        value={formData.priority}
        onChange={(e) =>
          setFormData({
            ...formData,
            priority: e.target.value,
          })
        }
      >
        <option value="low">
          Low
        </option>

        <option value="medium">
          Medium
        </option>

        <option value="high">
          High
        </option>
      </select>

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded"
      >
        {loading
          ? "Processing..."
          : buttonText}
      </button>
    </form>
  );
}