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
      className="space-y-8"
    >
      {/* Personal Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="25"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Dependents
            </label>

            <input
              type="number"
              name="dependents"
              value={formData.dependents}
              onChange={handleChange}
              placeholder="0"
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Income & Expenses */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Income & Expenses
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Income (₹)
            </label>

            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              placeholder="50000"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Expenses (₹)
            </label>

            <input
              type="number"
              name="monthlyExpenses"
              value={formData.monthlyExpenses}
              onChange={handleChange}
              placeholder="20000"
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Savings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Savings & Emergency Fund
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Current Savings (₹)
            </label>

            <input
              type="number"
              name="currentSavings"
              value={formData.currentSavings}
              onChange={handleChange}
              placeholder="100000"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Emergency Fund (₹)
            </label>

            <input
              type="number"
              name="emergencyFund"
              value={formData.emergencyFund}
              onChange={handleChange}
              placeholder="50000"
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Risk Profile */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Risk Profile
        </h2>

        <label className="block text-sm font-medium mb-2">
          Risk Appetite
        </label>

        <select
          name="riskAppetite"
          value={formData.riskAppetite}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
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
      </div>

      <button
        type="submit"
        disabled={saving}
        className="
          w-full
          bg-slate-900
          hover:bg-slate-800
          text-white
          py-3
          rounded-lg
          font-medium
          transition
        "
      >
        {saving
          ? "Saving..."
          : "Save Profile"}
      </button>
    </form>
  );
}