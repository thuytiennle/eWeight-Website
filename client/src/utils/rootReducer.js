import {combineReducers} from "redux";
import signUpReducer from "../containers/Home/SignUp/module/reducer";
import signInReducer from "../containers/Home/SignIn/module/reducer";
import dashboardReducer from "../containers/Admin/Dashboard/module/reducer";
import weightManageReducer from "../containers/Admin/WeightManage/module/reducer";

const rootReducer = combineReducers({
    signUpReducer,
    signInReducer,
    dashboardReducer,
    weightManageReducer,
});

export default rootReducer;