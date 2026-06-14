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
      <h1 className="text-3xl font-bold mb-8">
        Financial Profile
      </h1>

      <ProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={saveProfile}
        saving={saving}
      />
    </div>
  );
}