import { SIGN_IN} from "./constant";

let initialState = {
  user: {},
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
      case SIGN_IN:
          state.user = action.user;
           // Login thành công thì lưu infoUser xuống localStorage
           localStorage.setItem("UserAdmin", JSON.stringify(action.user));
           // Login thành công  => qua trang dashboard. Push dùng đẩy qua trang dashboard. Dùng history do action ko phải là components. Redirect là component
          action.history.push("/dashboard");
          return {...state};
      default:
          return {...state};
  }
};


export default signInReducer;