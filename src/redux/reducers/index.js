import { combineReducers } from "redux";

import LoginReducer from "./authReducers/loginReducer";
import SignUpReducer from "./authReducers/signupReducer";
import PasswordReducer from "./authReducers/passwordReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  password: PasswordReducer,
});

export default rootReducer;
