import authConstants from "../../../constants/authConstants";
import {getIsSubmitted} from '../../selectors/auth/login'

const initalState = {
  isLoggedIn: false,
  isSubmitted: false,
};

export default function login(state = initalState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUESTED:
      console.log("login requested reducer");
      return {
        isSubmitted: true,
        user: action.user,
      };

    case authConstants.LOGIN_SUCCESS:
      console.log("login reducer");
      return {
        isLoggedIn: true,
        user: action.user,
      };

    case authConstants.LOGIN_FAILURE:
      return {};

    case authConstants.LOGOUT:
      return {
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
