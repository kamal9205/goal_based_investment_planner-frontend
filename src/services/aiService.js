import API from "./api";

export const askAdvisor =
  async (question) => {
    const response =
      await API.post(
        "/ai/advisor",
        {
          question,
        }
      );

    return response.data;
  };