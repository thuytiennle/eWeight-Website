import { UPDATE_WEIGHT, ADD_WEIGHT, DELETE_WEIGHT } from "./constant";

let initialState = {
  user: {},
};

const weightManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEIGHT:
      return { ...state };
    case UPDATE_WEIGHT:
      return { ...state };
    case DELETE_WEIGHT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default weightManageReducer;
