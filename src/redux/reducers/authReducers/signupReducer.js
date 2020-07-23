import authConstants from "../../../constants/authConstants";

const initalState = {};

export default function signUpReducer(state = initalState, action) {
  switch (action.type) {
    case authConstants.SIGN_UP_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.SIGN_UP_SUCCESS:
      return {
        isRegisterd: true,
      };

    case authConstants.SIGN_UP_FAILURE:
      return {};

    default:
      return state;
  }
}
