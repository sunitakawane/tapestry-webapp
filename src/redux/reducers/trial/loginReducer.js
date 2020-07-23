import { authConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loggingIn: true,
        user: action.user,
      };

    case authConstants.LOGOUT:
      return {};

    default:
      return state;
  }
}
