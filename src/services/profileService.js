import API from "./api";

export const getProfile =
  async () => {
    const response =
      await API.get("/profile");

    return response.data;
  };

export const updateProfile =
  async (profileData) => {
    const response =
      await API.put(
        "/profile",
        profileData
      );

    return response.data;
  };

  export const getAnalysis =
  async () => {
    const response =
      await API.get(
        "/profile/analysis"
      );

    return response.data;
  };