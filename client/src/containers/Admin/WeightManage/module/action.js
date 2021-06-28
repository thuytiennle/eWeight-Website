import { UPDATE_WEIGHT, ADD_WEIGHT, DELETE_WEIGHT } from "./constant";

export const actAddWeight = (weight) => {
  return {
    type: ADD_WEIGHT,
    data: weight,
  };
};

export const actUpdateWeight = (updateWeight) => {
    return {
      type: ADD_WEIGHT,
      data: updateWeight,
    };
};

export const actDeleteWeight = (id) => {
    return {
      type: ADD_WEIGHT,
      data: id,
    };
};
  
