import { combineReducers } from "redux";

// reducers
import labReducer from './labReducers/labReducers';
import loginReducer from "./authReducers/loginReducer";
import passwordReducer from "./authReducers/passwordReducer";
import signUpReducer from "./authReducers/signupReducer";
import summaryReducer from './landingReducers/summaryReducers';
import testReducer from './landingReducers/testsReducer';

const rootReducer = combineReducers({
  lab: labReducer,
  login: loginReducer,
  password: passwordReducer,
  signUp: signUpReducer,
  summary: summaryReducer,
  tests: testReducer,
});

export default rootReducer;
