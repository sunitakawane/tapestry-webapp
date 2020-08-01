import authConstants from "../../../constants/authConstants";

const initalState = {};

export default function passwordReducer(state = initalState, action) {
  switch (action.type) {
    case authConstants.RESET_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.RESET_PASSWORD_SUCCESS:
      return {
        isResetPasswordSuccess: true,
      };

    case authConstants.RESET_PASSWORD_FAILURE:
      return {
        isInvalid: true,
      };

    case authConstants.SET_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.SET_PASSWORD_SUCCESS:
      return {
        isSetPasswordSuccess: true,
      };

    case authConstants.SET_PASSWORD_FAILURE:
      return {
        isInvalid: true,
      };

    case authConstants.CHANGE_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        isChangePasswordSuccess: true,
      };

    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
        isChangePasswordFailure: true,
      };
    default:
      return state;
  }
}
