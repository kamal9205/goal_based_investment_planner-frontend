import API from "./api";

export const getProfile =
  async () => {
    const response =
      await API.get("/user/profile");

    return response.data;
  };