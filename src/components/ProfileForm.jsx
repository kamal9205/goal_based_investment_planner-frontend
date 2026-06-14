"use client";

export default function ProfileForm({
  formData,
  handleChange,
  handleSubmit,
  saving,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />
      <input
        type="number"
        name="monthlyIncome"
        placeholder="Monthly Income"
        value={formData.monthlyIncome}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <input
        type="number"
        name="monthlyExpenses"
        placeholder="Monthly Expenses"
        value={formData.monthlyExpenses}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <input
        type="number"
        name="currentSavings"
        placeholder="Current Savings"
        value={formData.currentSavings}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <input
        type="number"
        name="emergencyFund"
        placeholder="Emergency Fund"
        value={formData.emergencyFund}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <input
        type="number"
        name="dependents"
        placeholder="Dependents"
        value={formData.dependents}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <select
        name="riskAppetite"
        value={formData.riskAppetite}
        onChange={handleChange}
        className="border p-3 w-full rounded w-full"
      >
        <option value="low">
          Low Risk
        </option>

        <option value="medium">
          Medium Risk
        </option>

        <option value="high">
          High Risk
        </option>
      </select>

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-black text-white py-3 rounded"
      >
        {saving
          ? "Saving..."
          : "Save Profile"}
      </button>
    </form>
  );
}