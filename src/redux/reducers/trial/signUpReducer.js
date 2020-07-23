import { authConstants } from "../constants";

export function signUp(state = {}, action) {
  switch (action.type) {
    case authConstants.VERIFY_EMAIL:
      return {};

    default:
      return state;
  }
}
