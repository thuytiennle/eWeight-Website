import { OPEN_REGISTER_FORM} from "./constant";

let initialState = {
  isOpen: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
      case OPEN_REGISTER_FORM:
          state.isOpen = action.data;
          return {...state};
      default:
          return {...state};
  }
};


export default signUpReducer;