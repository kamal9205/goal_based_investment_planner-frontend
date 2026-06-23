"use client";

import { useProfile } from "@/hooks/useProfile";
import ProfileForm from "@/components/ProfileForm";

export default function ProfilePage() {
  const {
    formData,
    handleChange,
    saveProfile,
    loading,
    saving,
  } = useProfile();

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Financial Profile
        </h1>

        <p className="text-gray-600 mt-2">
          This information is used to generate
          investment plans, risk analysis and
          personalized recommendations.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8">
        <ProfileForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={saveProfile}
          saving={saving}
        />
      </div>
    </div>
  );
}