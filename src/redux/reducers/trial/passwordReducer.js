import { authConstants } from "../constants";

export function signUp(state = {}, action) {
  switch (action.type) {
    case authConstants.RESET_PASSWORD: {
      return {};
    }

    case authConstants.CONFIRM_PASSWORD: {
      return {};
    }

    case authConstants.CHANGE_PASSWORD: {
      return {};
    }
  }
}
