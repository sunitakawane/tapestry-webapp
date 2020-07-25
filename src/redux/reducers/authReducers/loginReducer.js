import authConstants from "../../../constants/authConstants";

const initalState = {};

export default function login(state = initalState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUESTED:
      console.log("login requested reducer");
      return {
        isSubmitted: true,
        user: action.user
      };

    case authConstants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };

    case authConstants.LOGIN_FAILURE:
      return {}

    case authConstants.LOGOUT:
      return {
        isLoggedIn: false
      }

    default:
      return state;
  }
}
