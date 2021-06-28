import {combineReducers} from "redux";
import signUpReducer from "../containers/Home/SignUp/module/reducer";
import signInReducer from "../containers/Home/SignIn/module/reducer";
import dashboardReducer from "../containers/Admin/Dashboard/module/reducer";

const rootReducer = combineReducers({
    signUpReducer,
    signInReducer,
    dashboardReducer,
});

export default rootReducer;