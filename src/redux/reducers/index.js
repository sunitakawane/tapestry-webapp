import { combineReducers } from "redux";

import LoginReducer from "./authReducers/loginReducer";
import SignUpReducer from "./authReducers/signupReducer";
import PasswordReducer from "./authReducers/passwordReducer";
import testReducer from './landingReducers/testsReducer'
import summaryReducer from './landingReducers/summaryReducers'
import labReducer from './labReducers/labReducers'

const rootReducer = combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  password: PasswordReducer,
  tests: testReducer,
  summary: summaryReducer,
  lab: labReducer
});

export default rootReducer;
