import { SELECT_USER_MANAGEMENT, SELECT_WEIGHT_MANAGEMENT } from "./constant";

export const actSelectUserManagement = () => {
  return {
    type: SELECT_USER_MANAGEMENT,
  };
};

export const actSelectWeightManagement = () => {
  return {
    type: SELECT_WEIGHT_MANAGEMENT,
  };
};
