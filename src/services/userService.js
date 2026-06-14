import API from "./api";

export const getProfile =
  async () => {
    const response =
      await API.get("/user/profile");

    return response.data;
  };

export const getAnalysis =
  async () => {
    const response =
      await API.get(
        "/user/analysis"
      );

    return response.data;
  };