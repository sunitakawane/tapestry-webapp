import authConstants from "../../../constants/authConstants";

const initalState = {
  isSubmitted: false,
};

export default function signUpReducer(state = initalState, action) {
  switch (action.type) {
    case authConstants.SIGN_UP_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.SIGN_UP_SUCCESS:
      return {
        isRegistered: true,
      };

    case authConstants.SIGN_UP_FAILURE:
      return {
        isInvalid: true,
      };

    default:
      return state;
  }
}
