import API from "./api";

export const generateInvestmentPlan =
  async (data) => {
    const response = await API.post(
      "/investments/generate-plan",
      data
    );

    return response.data;
  };