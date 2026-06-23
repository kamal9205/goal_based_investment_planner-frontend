import API from "./api";

export const getRecommendations =
  async () => {
    const response =
      await API.get(
        "/user/recommendations"
      );

    return response.data;
  };