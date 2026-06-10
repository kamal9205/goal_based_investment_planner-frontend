import API from "./api";

export const getDashboard =
  async () => {
    const response =
      await API.get("/dashboard");

    return response.data.data;
  };