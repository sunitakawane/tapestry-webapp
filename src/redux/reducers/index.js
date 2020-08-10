import { combineReducers } from "redux";

import LoginReducer from "./authReducers/loginReducer";
import SignUpReducer from "./authReducers/signupReducer";
import PasswordReducer from "./authReducers/passwordReducer";
import testsReducer from './landingReducers/testsReducer'
import summaryReducer from './landingReducers/summaryReducers'
import userReducer from './userReducers/userReducer'

const rootReducer = combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  password: PasswordReducer,
  tests: testsReducer,
  summary: summaryReducer,
  users: userReducer
});

export default rootReducer;
