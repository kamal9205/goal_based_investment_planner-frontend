import API from "./api";

export const getGoals = async () => {
  const response = await API.get(
    "/goals"
  );

  return response.data.data;
};

export const createGoal = async (
  goalData
) => {
  const response = await API.post(
    "/goals",
    goalData
  );

  return response.data;
};

export const getGoalById = async (
  id
) => {
  const response = await API.get(
    `/goals/${id}`
  );

  return response.data.data;
};

export const updateGoal = async (id, data) => {
    const response = await API.put(
        `/goals/${id}`, data
    )
    return response.data.data;
};

export const deleteGoal = async (id) => {
    const response = await API.delete(
        `/goals/${id}`
    )
    return response.data;
};