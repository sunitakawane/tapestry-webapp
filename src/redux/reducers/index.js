import { combineReducers } from "redux";

import LoginReducer from "./authReducers/loginReducer";
import SignUpReducer from "./authReducers/signupReducer";
import ForgotPasswordReducer from "./authReducers/passwordReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  // signUp: SignUpReducer,
  // forgotPassword: ForgotPasswordReducer,
});

export default rootReducer;
