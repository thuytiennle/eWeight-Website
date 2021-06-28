import { SELECT_USER_MANAGEMENT, SELECT_WEIGHT_MANAGEMENT } from "./constant";

let initialState = {
  isSelectUserManage: false,
  isSelectWeightManage: true,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER_MANAGEMENT:
      // Close user, open weight 
      state.isSelectUserManage = true;
      state.isSelectWeightManage= false;
      return { ...state };
    case SELECT_WEIGHT_MANAGEMENT:
      state.isSelectUserManage = false;
      state.isSelectWeightManage= true;
      return { ...state };
    default:
      return { ...state };
  }
};

export default dashboardReducer;
